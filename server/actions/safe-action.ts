"use server";

import { createSafeActionClient } from "next-safe-action";
import { auth } from "@clerk/nextjs";

export const action = createSafeActionClient();

export const authAction = createSafeActionClient({
  buildContext: async () => {
    const userId = auth().userId;

    if (!userId) {
      throw new Error("user is not authenticated!");
    }

    return {
      userId: userId,
    };
  },
});
