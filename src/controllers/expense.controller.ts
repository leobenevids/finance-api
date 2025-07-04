import { Request, Response } from "express";
import * as expenseService from "../services/expense.service";
import { createExpenseSchema } from "schemas/expense.schema";

export async function createExpenseController(req: Request, res: Response) {
  try {
    const result = createExpenseSchema.safeParse(req.body);

    if (!result.success) {
      const errors = result.error.errors.map((err) => err.message);
      return res.status(400).json({ errors });
    }

    const { title, amount, date } = result.data;
    const userId = (req.user as any).sub;

    const expense = await expenseService.createExpense(
      title,
      amount,
      userId,
      date
    );
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar gasto" });
  }
}

export async function listExpensesController(req: Request, res: Response) {
  const userId = (req.user as any).sub;
  const expenses = await expenseService.listExpenses(userId);
  res.json(expenses);
}

export async function updateExpenseController(req: Request, res: Response) {
  const userId = (req.user as any).sub;
  const { id } = req.params;
  const { title, amount, date } = req.body;

  try {
    const result = await expenseService.updateExpense(id, userId, {
      title,
      amount,
      date,
    });

    if (result.count === 0) {
      return res
        .status(404)
        .json({ error: "Gasto não encontrado ou não pertence ao usuário" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar gasto" });
  }
}

export async function deleteExpenseController(req: Request, res: Response) {
  const userId = (req.user as any).sub;
  const { id } = req.params;

  try {
    const result = await expenseService.deleteExpense(id, userId);

    if (result.count === 0) {
      return res
        .status(404)
        .json({ error: "Gasto não encontrado ou não pertence ao usuário" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar gasto" });
  }
}
