import { drizzle } from "drizzle-orm/neon-http";
import { neon, neonConfig } from "@neondatabase/serverless";

import { pgTable, serial, varchar, boolean, json } from "drizzle-orm/pg-core";
import { InferModel } from "drizzle-orm";

neonConfig.fetchConnectionCache = true;

const connection = neon(
  "postgres://teacherwizard:8khMNTd6LzOs@ep-billowing-darkness-02559959.eu-central-1.aws.neon.tech/neondb"
);

export const db = drizzle(connection);

export const assignment = pgTable("assignment", {
  id: serial("id").primaryKey().unique().notNull(),
  title: varchar("title", { length: 256 }).notNull(),
  description: varchar("description", { length: 256 }).notNull(),
  userId: varchar("userId", { length: 256 }).notNull(),
  blocks: json("blocks"),
  public: boolean("public").default(false),
});

export type Assignment = InferModel<typeof assignment, "select">;
export type NewAssignment = InferModel<typeof assignment, "insert">;
