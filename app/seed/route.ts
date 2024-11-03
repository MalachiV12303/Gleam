import { db } from '@vercel/postgres';
import { cameras, lenses } from '../lib/temp-data';

const client = await db.connect();

async function seedCameras() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS cameras (
      id CHAR(9) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      type VARCHAR(20) NOT NULL,
      brand VARCHAR(20) NOT NULL,
      value DECIMAL(19,4) NOT NULL,
      details JSON NOT NULL,
      description TEXT
    );
  `;

  const insertedCameras = await Promise.all(
    cameras.map(
      (camera) => client.sql`
        INSERT INTO cameras (id, name, type, brand, value, details, description)
        VALUES (${camera.id}, ${camera.name}, ${camera.type}, ${camera.brand}, ${camera.value}, ${camera.details}, ${camera.description})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedCameras;
}

async function seedLenses() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS lenses (
      id CHAR(9) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      type VARCHAR(20) NOT NULL,
      brand VARCHAR(20) NOT NULL,
      value DECIMAL(19,4) NOT NULL,
      details JSON NOT NULL
    );
  `;

  const insertedLenses = await Promise.all(
    lenses.map(
      (lense) => client.sql`
        INSERT INTO lenses (id, name, type, brand, value, details)
        VALUES (${lense.id}, ${lense.name}, ${lense.type}, ${lense.brand}, ${lense.value}, ${lense.details})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );
  return insertedLenses;
}



export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedCameras();
    await seedLenses();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
