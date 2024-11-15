import { pgTable, decimal, json, serial, text } from 'drizzle-orm/pg-core'

export type SelectCamera = typeof cameras.$inferSelect;
export type Camera = Pick<SelectCamera, 'id' | 'name' | 'type' | 'brand' | 'value' | 'details' | 'description'>;
export type SelectLense = typeof lenses.$inferSelect;
export type Lense = Pick<SelectLense, 'id' | 'name' | 'type' | 'brand' | 'value' | 'details' >;

export const cameras = pgTable(
  'cameras', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  type: text('type').notNull(),
  brand: text('brand').notNull(),
  value: decimal('value').notNull().$type<number>(),
  details: json('details').notNull().$type<{ megapixels: number, res: number, shutter: string, sd: string[], lens: string[] }>(),
  description: text('description').notNull(),
});

export const lenses = pgTable(
  'lenses', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  type: text('type').notNull(),
  brand: text('brand').notNull(),
  value: decimal('value').notNull().$type<number>(),
  details: json('details').notNull().$type<{ minfl: number, maxfl: number, maxap : string, mount : string[] } >(),
});


