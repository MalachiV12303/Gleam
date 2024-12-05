import { pgTable, char, varchar, numeric, json, jsonb, text, integer } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



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
