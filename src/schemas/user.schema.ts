import { z } from "zod";

export const createUserSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "Senha muito curta"),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
