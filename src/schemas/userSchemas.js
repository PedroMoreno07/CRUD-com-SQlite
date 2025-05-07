import { optional, z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

export const updateUserSchema = z.object({
  name: z.string().min(3, "o nome deve ter pelo meno 3 chars").optional(),
  email: z.string().email("email invalido"),
  password: z
    .string()
    .min(6, "A senha tem que ter pelo menos 6 chars")
    .optional(),
});
