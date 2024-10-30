import { sql } from '@vercel/postgres';
import {
    CameraType,
  } from './definitions';

export async function fetchCameras() {
    try {
      const data = await sql<CameraType>`
        SELECT
          id,
          name,
          type,
          brand,
          megapixels,
          value
        FROM cameras
        ORDER BY name ASC
      `;
  
      const cameras = data.rows;
      return cameras;
      
    } catch (err) {
      console.error('Database Error:', err);
      throw new Error('Failed to fetch all cameras.');
    }
  }

// export async function fetchCameraDetail() {
//     try {
//       const data = await sql<CamerasDetail>`
//         SELECT
//           id,
//           name,
//           type,
//           brand,
//           megapixels,
//           price
//         FROM cameras
//         ORDER BY name ASC
//       `;
  
//       const cameras = data.rows;
//       return cameras;
//     } catch (err) {
//       console.error('Database Error:', err);
//       throw new Error('Failed to fetch all cameras.');
//     }
//   }

  export async function fetchFilteredCameras( type:string, canon: boolean, nikon: boolean, sony: boolean, pana: boolean ) {
    try {

        await new Promise((resolve) => setTimeout(resolve, 3000));
        
        let brands="";
        if(canon)
          brands=brands.concat("canon")
        if(nikon)
          brands=brands.concat("nikon")
        if(sony)
          brands=brands.concat("sony")
        if(pana)
          brands=brands.concat("pana")

        const data = await sql<CameraType>`
        SELECT
          id,
          name,
          type,
          brand,
          megapixels,
          value
        FROM cameras
        WHERE 
          cameras.brand ILIKE ${`%${brands}%`} AND
          cameras.type ILIKE ${`%${type}%`}
        ORDER BY name ASC
      `;
      if(data.rowCount===0){
        return null;
      }
      else
        return data.rows;
    } catch (err) {
      console.error('Database Error:', err);
      throw new Error('Failed to fetch filtered cameras.');
    }
  }

  export async function fetchSearchedItems( search : string ) {
    try {
        const data = await sql<CameraType>`
        SELECT
          id,
          name,
          type,
          brand,
          megapixels,
          value
        FROM cameras
        WHERE 
          cameras.brand ILIKE ${`%${search}%`} OR
          cameras.name ILIKE ${`%${search}%`}
        ORDER BY name ASC
      `;
      if(data.rowCount === 0){
        return null;
      }
      else
        return data.rows;
    } catch (err) {
      console.error('Database Error:', err);
      throw new Error('Failed to fetch searched items.');
    }
  }
