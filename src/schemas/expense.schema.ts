import { z } from "zod";

export const createExpenseSchema = z.object({
  title: z.string().min(2, "Título muito curto"),
  amount: z.number().positive("Valor deve ser maior que zero"),
  date: z.coerce.date().optional(),
});
