import * as expenseRepo from "../repositories/expense.repository";

export function createExpense(
  title: string,
  amount: number,
  userId: string,
  date?: Date
) {
  return expenseRepo.createExpense({ title, amount, userId, date });
}

export function listExpenses(userId: string) {
  return expenseRepo.listUserExpenses(userId);
}

export function updateExpense(
  id: string,
  userId: string,
  data: { title?: string; amount?: number; date?: Date }
) {
  return expenseRepo.updateExpense(id, userId, data);
}

export function deleteExpense(id: string, userId: string) {
  return expenseRepo.deleteExpense(id, userId);
}
