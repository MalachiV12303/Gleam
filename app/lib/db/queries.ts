import { eq } from 'drizzle-orm';
import { db } from './drizzle';
import { cameras, lenses } from './schema';
//import { searchParamsCache } from '../searchParams';

// const typeFilter = (types?: string[]) => {
//   if (types) {
//     return sql`cameras.type IN (${sql.join(
//       types.map((type) => sql`${type}`),
//       sql`, `
//     )})`
//   }
//   return undefined;
// }
// const brandFilter = (brands?: string[]) => {
//   if (brands) {
//     return sql`cameras.type IN (${sql.join(
//       brands.map((brand) => sql`${brand}`),
//       sql`, `
//     )})`
//   }
//   return undefined;
// }

export async function fetchCameras() {
  //const params = searchParamsCache.all()
  // const filters = [
  //    brandFilter(params.brands),
  //    typeFilter(params.type),
  //  ].filter(Boolean);

  // const whereClause = filters.length > 0 ? and(...filters) : undefined;

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
    //.where(inArray(cameras.type, ['dslr']))
    .orderBy(cameras.id);

  return fetchedCameras;
}

export async function fetchLenses() {
  //const params = searchParamsCache.all()

  // const filters = [
  //   brandFilter(params.brands),
  //   typeFilter(params.type),
  // ].filter(Boolean);
  // const whereClause = filters.length > 0 ? and(...filters) : undefined;

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
    //.where(whereClause)
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