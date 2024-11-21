import { and, between, eq, inArray } from 'drizzle-orm';
import { db } from './drizzle';
import { cameras, lenses } from './schema';
import { searchParamsCache } from '../searchParams';
import { SliderValue } from '@nextui-org/slider';

const priceFilter = (itemtype: string, price: SliderValue) => {
    const pr=price.toString().split(',');
    if(pr[0]==='0' && pr[1] === '3000') //may not be triggered when its supposed to, causing filters to never be undefined
      return undefined;
    return itemtype === 'cam' ? between(cameras.value, parseFloat(pr[0]), parseFloat(pr[1])) :
            itemtype === 'len' ? between(lenses.value, parseFloat(pr[0]), parseFloat(pr[1])): undefined
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

export async function fetchCameras() {
  const { type, brands, itemtype, price} = searchParamsCache.all();
  const filters = [
     brandFilter(itemtype, brands),
     typeFilter(itemtype,type),
     priceFilter(itemtype,price),
   ].filter(Boolean);
  const whereClause = filters.length > 0 ? and(...filters) : undefined;
  const fetchedCameras = await db
    .select({
      id: cameras.id,
      name: cameras.name,
      type: cameras.type,
      brand: cameras.brand,
      value: cameras.value,
      details: cameras.details,
      description: cameras.description,
    })
    .from(cameras)
    .where(whereClause)
    .orderBy(cameras.id);
  return fetchedCameras;
}

export async function fetchLenses() {
  const { type, brands, itemtype, price} = searchParamsCache.all();
  const filters = [
     brandFilter(itemtype, brands),
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
      details: cameras.details,
      description: cameras.description,
    })
    .from(cameras)
    .where(eq(cameras.id, parseInt(id)))
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
    .where(eq(lenses.id, parseInt(id)))
    .limit(1);
  return result[0];
}