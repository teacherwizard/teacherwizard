import { assignment, db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs";

export async function createAssignment() {
  "use server";
  const userId = auth().userId;

  await db.insert(assignment).values({
    title: "Test",
    description: "Test",
    blocks: { test: "test" },
    public: true,
    userId: userId,
  });
  revalidatePath("/dashboard/assignments");
}
