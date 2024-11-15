CREATE TABLE IF NOT EXISTS "cameras" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"type" text NOT NULL,
	"brand" text NOT NULL,
	"value" numeric NOT NULL,
	"details" json NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "lenses" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"type" text NOT NULL,
	"brand" text NOT NULL,
	"value" numeric NOT NULL,
	"details" json NOT NULL
);
