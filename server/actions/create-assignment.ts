"use server";
import { assignment, db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createAssignmentSchema } from "@/schemas";
import { authAction } from "@/actions/safe-action";

export const createAssignment = authAction(
  createAssignmentSchema,
  async (parsedInput, { userId }: { userId: string }) => {
    const newAssignment = await db
      .insert(assignment)
      .values({
        title: parsedInput.title,
        description: parsedInput.description,
        blocks: { test: "test" },
        public: parsedInput.public,
        userId: userId,
      })
      .returning({ id: assignment.id });

    revalidatePath("/dashboard/assignments");
    return newAssignment;
  }
);
