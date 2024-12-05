import { and, between, eq, gte, inArray, sql } from 'drizzle-orm';
import { db } from './drizzle';
import { cameras, lenses } from './schema';
import { searchParamsCache, useFilters } from '../searchParams';
import { SliderValue } from '@nextui-org/slider';

const priceFilter = (itemtype: string, price: SliderValue) => {
    const pr=price.toString().split(',');
    if(pr[0]==='0' && pr[1] === '3000') //may not be triggered when its supposed to, causing filters to never be undefined
      return undefined;
    return itemtype === 'cam' ? between(cameras.value, pr[0], pr[1]) :
            itemtype === 'len' ? between(lenses.value, pr[0], pr[1]): undefined
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

export async function fetchCameras() {
  const { type, brand, price, itemtype, res } = searchParamsCache.all();
  console.log("type is " + type +"\nbrand is " + brand + "\nprice is " + price +"\nres is " + res.toString() +"\n\n")
  const filters = [
     brandFilter(itemtype, brand),
     typeFilter(itemtype, type),
     priceFilter(itemtype, price),
     resFilter(itemtype, res),
   ].filter(Boolean);
  const whereClause = filters.length > 0 ? and(...filters) : undefined;
  const fetchedCameras = await db
    .select({
      id: cameras.id,
      name: cameras.name,
      type: cameras.type,
      brand: cameras.brand,
      value: cameras.value,
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
      value: lenses.value,
      details: lenses.details,
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
      value: cameras.value,
      description: cameras.description,
    })
    .from(cameras)
    //.where(eq(cameras.id, parseInt(id)))
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
      value: lenses.value,
      details: lenses.details,
    })
    .from(lenses)
    //.where(eq(lenses.id, parseInt(id)))
    .limit(1);
  return result[0];
}