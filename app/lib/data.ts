import { sql } from '@vercel/postgres';
import {
    Camera,
    CamerasDetail,
  } from './definitions';

export async function fetchCameras() {
    try {
      const data = await sql<Camera>`
        SELECT
          id,
          name,
          brand,
          price
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

export async function fetchCameraDetail() {
    try {
      const data = await sql<CamerasDetail>`
        SELECT
          id,
          name,
          type,
          brand,
          megapixels,
          price
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