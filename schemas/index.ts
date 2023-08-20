import { z } from "zod";

export const createAssignmentSchema = z.object({
  title: z.string().min(1).max(32),
  description: z.string().min(1).max(512),
  public: z.boolean().default(false),
});
