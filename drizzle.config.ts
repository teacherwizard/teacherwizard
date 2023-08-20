import type { Config } from "drizzle-kit";

export default {
  schema: "./lib/db.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    host: "ep-billowing-darkness-02559959.eu-central-1.aws.neon.tech",
    port: 5432,
    user: "teacherwizard",
    password: "8khMNTd6LzOs",
    database: "neondb",
    ssl: true,
    /* connectionString:
      "postgres://teacherwizard:8khMNTd6LzOs@ep-billowing-darkness-02559959.eu-central-1.aws.neon.tech/neondb?sslmode='require'", */
  },
} satisfies Config;
