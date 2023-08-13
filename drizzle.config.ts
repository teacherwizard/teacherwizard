import type { Config } from "drizzle-kit";

export default {
  schema: "./lib/db.ts",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    connectionString:
      'mysql://gywn0p4y3ijrfgo12v2j:pscale_pw_ns1hj8ROdMJkpiCamdKbqMt6yxTtdOqxw6qZtCzit4n@aws.connect.psdb.cloud/teacherwizard?ssl={"rejectUnauthorized":true}',
  },
} satisfies Config;
