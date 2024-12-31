import { pgTable, text, jsonb, char, varchar, numeric, integer } from 'drizzle-orm/pg-core'

export type SelectCamera = typeof cameras.$inferSelect;
export type Camera = Pick<SelectCamera, 'id' | 'name' | 'type' | 'brand' | 'price'  | 'compats' | 'description' | 'megapixels' | 'res' | 'shutter' >;
export type SelectLense = typeof lenses.$inferSelect;
export type Lense = Pick<SelectLense, 'id' | 'name' | 'type' | 'brand' | 'price' | 'details' | 'maxap' | 'minfl' | 'maxfl'>;


export const lenses = pgTable("lenses", {
	id: char({ length: 8 }).primaryKey().notNull(),
	name: varchar({ length: 255 }).notNull(),
	type: varchar({ length: 20 }).notNull(),
	brand: varchar({ length: 20 }).notNull(),
	price: numeric({ precision: 19, scale:  2 }).$type<number>().notNull(),
	details: jsonb().notNull(),
	maxap: text(),
	minfl: integer(),
	maxfl: integer(),
});

export const cameras = pgTable("cameras", {
	id: char({ length: 8 }).primaryKey().notNull(),
	name: varchar({ length: 255 }).notNull(),
	type: varchar({ length: 20 }).notNull(),
	brand: varchar({ length: 20 }).notNull(),
	price: numeric({ precision: 19, scale:  2 }).$type<number>().notNull(),
	compats: jsonb().$type<{ sd: string[], lens: string[]}>(),
	description: text(),
	res: integer().default(0).notNull(),
	megapixels: numeric({ precision: 3, scale:  1 }).default('0').notNull(),
	shutter: text(),
});
