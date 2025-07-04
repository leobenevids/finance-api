import { Request, Response } from "express";
import * as expenseService from "../services/expense.service";

export async function createExpenseController(req: Request, res: Response) {
  const { title, amount, date } = req.body;
  const userId = (req.user as any).sub;

  const expense = await expenseService.createExpense(
    title,
    amount,
    userId,
    date
  );
  res.status(201).json(expense);
}

export async function listExpensesController(req: Request, res: Response) {
  const userId = (req.user as any).sub;
  const expenses = await expenseService.listExpenses(userId);
  res.json(expenses);
}
