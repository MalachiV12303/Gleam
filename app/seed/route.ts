import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { cameras } from '../lib/data';

const client = await db.connect();

async function seedCameras() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS cameras (
      id CHAR(7) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      type VARCHAR(255) NOT NULL,
      brand VARCHAR(255) NOT NULL,
      megapixels DECIMAL(3,1) NOT NULL,
      price DECIMAL(19,4) NOT NULL
    );
  `;

  const insertedCameras = await Promise.all(
    cameras.map(
      (camera) => client.sql`
        INSERT INTO cameras (id, name, type, brand, megapixels, price)
        VALUES (${camera.id}, ${camera.name}, ${camera.type}, ${camera.brand}, ${camera.megapixels}, ${camera.price})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedCameras;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedCameras();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
