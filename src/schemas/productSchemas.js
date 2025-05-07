import { optional, z } from "zod";
export const createProductSchema = z.object({
  name: z.string().min(3),
  price: z.number().gt(0),
  stock: z.number().nonnegative(),
});
