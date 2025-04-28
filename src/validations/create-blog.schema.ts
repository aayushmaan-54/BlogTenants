import { z } from "zod";


export const CreateBlogSchema = z.object({
  title: z.string().min(1).max(100),
  content: z.string().min(1),
  description: z.string().min(1).max(200),
  imageUrl: z.string().min(1),
  slug: z.string().min(1).max(190),
})