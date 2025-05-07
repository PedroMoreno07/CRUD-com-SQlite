import { optional, z } from "zod";
export const createProductSchema = z.object({
  name: z.string(),
  description: z.string().max(100).optional(),
  price: z.number(),
  stock: z.number(),
  createdAt: z.datetime(),
});
