import { sql } from '@vercel/postgres';
import {
  CameraDetail,
  LenseDetail,
} from './definitions';


export async function fetchCamera(id: string) {
  try {
    const data = await sql<CameraDetail>`
        SELECT
          name,
          type,
          brand,
          value,
          details -> 'megapixels' AS megapixels,
          details -> 'res' AS res,
          details ->> 'shutter' AS shutter,
          details -> 'sd' AS sd,
          details -> 'lens' AS lens,
          description
        FROM cameras
        WHERE
          cameras.id ILIKE ${`%${id}%`}
        ORDER BY name ASC
        LIMIT 1
      `;
    const camera = data.rows;
    return camera.at(0);
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch camera.');
  }
}



export async function fetchCameras(search: string, price: string , type: string, canon: boolean, nikon: boolean, sony: boolean, pana: boolean) {
  try {
    
    //await new Promise((resolve) => setTimeout(resolve, 3000));
    const p=price.split(',')
    const vals=p.map(parseFloat)
    //console.log("p" + p + "\nvals" + vals)

    let brands = "";
    if (canon)
      brands = brands.concat("canon")
    if (nikon)
      brands = brands.concat("nikon")
    if (sony)
      brands = brands.concat("sony")
    if (pana)
      brands = brands.concat("pana")

    let data=null;
    if (search === '') {
      data = await sql<CameraDetail>`
        SELECT
          id,
          name,
          type,
          brand,
          value,
          details -> 'megapixels' AS megapixels,
          details -> 'res' AS res,
          details ->> 'shutter' AS shutter,
          details -> 'sd' AS sd,
          details -> 'lens' AS lens,
          description
        FROM cameras
        WHERE
          cameras.brand ILIKE ${`%${brands}%`} AND
          cameras.type ILIKE ${`%${type}%`} AND
          cameras.value > ${vals[0]} AND
          cameras.value < ${vals[1]}
        ORDER BY name ASC 
      `;
    } else {
      data = await sql<CameraDetail>`
        SELECT
          id,
          name,
          type,
          brand,
          value,
          details -> 'megapixels' AS megapixels,
          details -> 'res' AS res,
          details ->> 'shutter' AS shutter,
          details -> 'sd' AS sd,
          details -> 'lens' AS lens,
          description
        FROM cameras
        WHERE 
          cameras.name ILIKE ${`%${search}%`} AND
          cameras.value > ${vals[0]} AND
          cameras.value < ${vals[1]}
        ORDER BY name ASC
      `;
    }
    if (data.rowCount === 0) {
      return null;
    }
    else
      return data.rows;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch filtered cameras.');
  }
}


export async function fetchLenses(search: string, type: string, canon: boolean, nikon: boolean, sony: boolean, pana: boolean) {
  try {
    //await new Promise((resolve) => setTimeout(resolve, 3000));
    let brands = "";
    if (canon)
      brands = brands.concat("canon")
    if (nikon)
      brands = brands.concat("nikon")
    if (sony)
      brands = brands.concat("sony")
    if (pana)
      brands = brands.concat("pana")

    let data=null;
    if (search === '') {
      data = await sql<LenseDetail>`
        SELECT
          id,
          name,
          type,
          brand,
          value,
          details -> 'minfl' AS minfl,
          details -> 'maxfl' AS maxfl,
          details -> 'maxap' AS maxap,
          details ->> 'mount' AS mount
        FROM lenses
        WHERE 
          lenses.brand ILIKE ${`%${brands}%`} AND
          lenses.type ILIKE ${`%${type}%`}
        ORDER BY name ASC
      `;
    }else{
      data = await sql<LenseDetail>`
        SELECT
          id,
          name,
          type,
          brand,
          value,
          details
        FROM lenses
        WHERE 
          lenses.brand ILIKE ${`%${brands}%`} AND
          lenses.type ILIKE ${`%${type}%`}
        ORDER BY name ASC
      `;
    }
    

    if (data.rowCount === 0) {
      return null;
    }
    else
      return data.rows;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch filtered cameras.');
  }
}

