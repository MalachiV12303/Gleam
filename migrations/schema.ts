import { pgTable, char, varchar, numeric, jsonb, text, integer } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const cameras = pgTable("cameras", {
	id: char({ length: 8 }).primaryKey().notNull(),
	name: varchar({ length: 255 }).notNull(),
	type: varchar({ length: 20 }).notNull(),
	brand: varchar({ length: 20 }).notNull(),
	price: numeric({ precision: 19, scale:  2 }).notNull(),
	compats: jsonb(),
	description: text(),
	res: integer().default(0).notNull(),
	megapixels: numeric({ precision: 3, scale:  1 }).default('0').notNull(),
	shutter: text(),
});

export const lenses = pgTable("lenses", {
	id: char({ length: 8 }).primaryKey().notNull(),
	name: varchar({ length: 255 }).notNull(),
	type: varchar({ length: 20 }).notNull(),
	brand: varchar({ length: 20 }).notNull(),
	price: numeric({ precision: 19, scale:  2 }).notNull(),
	details: jsonb().notNull(),
	maxap: text(),
	minfl: integer(),
	maxfl: integer(),
});
