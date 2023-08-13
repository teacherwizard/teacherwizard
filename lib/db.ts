import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
import {
  mysqlTable,
  serial,
  varchar,
  boolean,
  json,
} from "drizzle-orm/mysql-core";
import { InferModel } from "drizzle-orm";

const connection = connect({
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
});

export const db = drizzle(connection);

export const assignment = mysqlTable("assignment", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }),
  description: varchar("description", { length: 256 }),
  userId: varchar("userId", { length: 256 }),
  blocks: json("blocks"),
  public: boolean("public").default(false),
});

export type Assignment = InferModel<typeof assignment, "select">;
export type NewAssignment = InferModel<typeof assignment, "insert">;
