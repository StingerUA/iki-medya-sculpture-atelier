import { z } from "zod";
import { createProjectEnquiry } from "../db";
import { publicProcedure, router } from "../_core/trpc";

export const quoteEnquirySchema = z.object({
  name: z.string().trim().min(2).max(160),
  email: z.string().trim().email().max(320),
  projectType: z.enum(["Collection work", "Bespoke sculpture", "Spatial installation", "Other enquiry"]),
  message: z.string().trim().min(10).max(5000),
  selectedWorks: z.array(z.string().trim().min(1).max(80)).max(20),
});

export const enquiriesRouter = router({
  create: publicProcedure.input(quoteEnquirySchema).mutation(async ({ input }) => {
    await createProjectEnquiry({ ...input, selectedWorks: JSON.stringify(input.selectedWorks) });
    return { success: true } as const;
  }),
});
