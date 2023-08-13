import { db, assignment } from "@/lib/db";
import type { Assignment } from "@/lib/db";
import { eq } from "drizzle-orm";

export async function getAssignments() {
  const assignments: Assignment[] = await db
    .select()
    .from(assignment)
    .where(eq(assignment.public, true))
    .limit(10);

  return assignments;
}
