import { sql } from '@vercel/postgres';
import {
    CameraType,
  } from './definitions';
import { useSearchParams } from 'next/navigation';

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

  export async function fetchFilteredCameras(query: string[]) {
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
          cameras.brand ILIKE ${`%${query}%`} OR
          cameras.type ILIKE ${`%${query}%`}
        ORDER BY name ASC
      `;
      return data.rows;
    } catch (err) {
      console.error('Database Error:', err);
      throw new Error('Failed to fetch filtered items.');
    }
  }

  export function collectFilters(){
    
  }