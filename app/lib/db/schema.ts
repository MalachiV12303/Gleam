import { pgTable, text, jsonb, char, varchar, numeric, integer } from 'drizzle-orm/pg-core'

export type SelectCamera = typeof cameras.$inferSelect;
export type Camera = Pick<SelectCamera, 'id' | 'name' | 'type' | 'brand' | 'price'  | 'compats' | 'description' | 'megapixels' | 'res' | 'shutter' >;
export type SelectLense = typeof lenses.$inferSelect;
export type Lense = Pick<SelectLense, 'id' | 'name' | 'type' | 'brand' | 'price' | 'details' >;


export const lenses = pgTable("lenses", {
	id: char({ length: 8 }).primaryKey().notNull(),
	name: varchar({ length: 255 }).notNull(),
	type: varchar({ length: 20 }).notNull(),
	brand: varchar({ length: 20 }).notNull(),
	price: numeric({ precision: 19, scale:  4 }).$type<number>().notNull(),
	details: jsonb().notNull(),
});

export const cameras = pgTable("cameras", {
	id: char({ length: 8 }).primaryKey().notNull(),
	name: varchar({ length: 255 }).notNull(),
	type: varchar({ length: 20 }).notNull(),
	brand: varchar({ length: 20 }).notNull(),
	price: numeric({ precision: 19, scale:  2 }).$type<number>().notNull(),
	compats: jsonb().$type<string[]>(),
	description: text(),
	res: integer().default(0).notNull(),
	megapixels: integer().default(0).notNull(),
	shutter: text(),
});
