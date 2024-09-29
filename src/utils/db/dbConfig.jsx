import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://neondb_owner:qjVJmdU7iLa3@ep-young-hat-a670k107.us-west-2.aws.neon.tech/WasteManagement?sslmode=require"
);
export const db = drizzle(sql, { schema });
