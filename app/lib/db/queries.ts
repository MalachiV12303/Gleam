import { eq, and, between, inArray } from 'drizzle-orm';
import { db } from './drizzle';
import { cameras, lenses } from './schema';
import { searchParamsCache } from '../searchParams';
import { SliderValue } from '@nextui-org/slider';

const priceFilter = (itemtype: string, price: SliderValue) => {
    const psv = price.toString().split(',');
    const p = psv.map(parseInt)
    if(p[0]===0 && p[1] === 3000) //may not be triggered when its supposed to, causing filters to never be undefined
      return undefined;
    return itemtype === 'cam' ? between(cameras.price, p[0], p[1]) :
            itemtype === 'len' ? between(lenses.price, p[0], p[1]): undefined
}

const typeFilter = (itemtype: string, types: string[]) => {
  if (types.length === 0)
    return undefined
  return itemtype === 'cam' ? inArray(cameras.type, types) :
          itemtype === 'len' ? inArray(lenses.type, types) : undefined
}

const brandFilter = (itemtype: string, brands: string[]) => {
  if (brands.length === 0)
        return undefined
  return itemtype === 'cam' ? inArray(cameras.brand, brands) :
          itemtype === 'len' ? inArray(lenses.brand, brands) : undefined
}

const resFilter = (itemtype: string, res: string[]) => {
  if (res.length === 0)
        return undefined
  //using .map because i was having issue using parseAsInt in searchParamsCache, values were null and number[] had no length
  return itemtype === 'cam' ? inArray(cameras.res, res.map((val)=>parseInt(val))) : undefined
}

const shutterFilter = (itemtype: string, shutters: string[]) => {
  if (shutters.length === 0)
        return undefined
  return itemtype === 'cam' ? inArray(cameras.shutter, shutters) : undefined
}

const megapixelFilter = (itemtype: string, megapixels: string[]) => {
  if (megapixels.length === 0)
        return undefined
  return itemtype === 'cam' ? inArray(cameras.megapixels, megapixels) : undefined
}


export async function fetchCameras() {
  //const [{ type, brand, price, res, shutter },]= useFilters()

  const { type, brand, price, itemtype, res, shutter, mgp } = searchParamsCache.all();
  const filters = [
     brandFilter(itemtype, brand),
     typeFilter(itemtype, type),
     priceFilter(itemtype, price),
     resFilter(itemtype, res),
     shutterFilter(itemtype, shutter),
     megapixelFilter(itemtype, mgp)
   ].filter(Boolean);
  const whereClause = filters.length > 0 ? and(...filters) : undefined;

  const fetchedCameras = await db
    .select({
      id: cameras.id,
      name: cameras.name,
      type: cameras.type,
      brand: cameras.brand,
      price: cameras.price,
      res: cameras.res,
      megapixels: cameras.megapixels,
      shutter: cameras.shutter,
      compats: cameras.compats,
      description: cameras.description,
    })
    .from(cameras)
    .where(whereClause)
    .orderBy(cameras.id);
  return fetchedCameras;
}



export async function fetchLenses() {
  const { type, brand, price, itemtype } = searchParamsCache.all();
  const filters = [
     brandFilter(itemtype, brand),
     typeFilter(itemtype,type),
     priceFilter(itemtype,price),
   ].filter(Boolean);

  const whereClause = filters.length > 0 ? and(...filters) : undefined;
  const fetchedLenses = await db
    .select({
      id: lenses.id,
      name: lenses.name,
      type: lenses.type,
      brand: lenses.brand,
      price: lenses.price,
      details: lenses.details,
      maxap: lenses.maxap,
      minfl: lenses.minfl,
      maxfl: lenses.maxfl,
    })
    .from(lenses)
    .where(whereClause)
    .orderBy(lenses.id);
  return fetchedLenses;
}

export async function fetchCameraById(id: string) {
  const result = await db
    .select({
      id: cameras.id,
      name: cameras.name,
      type: cameras.type,
      brand: cameras.brand,
      price: cameras.price,
      res: cameras.res,
      megapixels: cameras.megapixels,
      shutter: cameras.shutter,
      compats: cameras.compats,
      description: cameras.description,
      
    })
    .from(cameras)
    .where(eq(cameras.id, id))
    .limit(1);

  return result[0];
}

export async function fetchLenseById(id: string) {
  const result = await db
    .select({
      id: lenses.id,
      name: lenses.name,
      type: lenses.type,
      brand: lenses.brand,
      price: lenses.price,
      details: lenses.details,
      maxap: lenses.maxap,
      minfl: lenses.minfl,
      maxfl: lenses.maxfl,
    })
    .from(lenses)
    .where(eq(lenses.id, id))
    .limit(1);
  return result[0];
}