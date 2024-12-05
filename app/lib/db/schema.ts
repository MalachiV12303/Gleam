import { pgTable, json, text, jsonb, char, varchar, numeric, integer } from 'drizzle-orm/pg-core'

export type SelectCamera = typeof cameras.$inferSelect;
export type Camera = Pick<SelectCamera, 'id' | 'name' | 'type' | 'brand' | 'value'  | 'compats' | 'description' | 'megapixels' | 'res' | 'shutter' >;
export type SelectLense = typeof lenses.$inferSelect;
export type Lense = Pick<SelectLense, 'id' | 'name' | 'type' | 'brand' | 'value' | 'details' >;


export const lenses = pgTable("lenses", {
	id: char({ length: 8 }).primaryKey().notNull(),
	name: varchar({ length: 255 }).notNull(),
	type: varchar({ length: 20 }).notNull(),
	brand: varchar({ length: 20 }).notNull(),
	value: numeric({ precision: 19, scale:  4 }).notNull(),
	details: json().notNull(),
});

export const cameras = pgTable("cameras", {
	id: char({ length: 8 }).primaryKey().notNull(),
	name: varchar({ length: 255 }).notNull(),
	type: varchar({ length: 20 }).notNull(),
	brand: varchar({ length: 20 }).notNull(),
	value: numeric({ precision: 19, scale:  2 }).notNull(),
	compats: jsonb(),
	description: text(),
	res: integer().default(0).notNull(),
	megapixels: integer().default(0).notNull(),
	shutter: text(),
});
