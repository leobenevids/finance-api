import prisma from "../prisma/client";

export async function createExpense(data: {
  title: string;
  amount: number;
  userId: string;
  date?: Date;
}) {
  return prisma.expense.create({
    data,
  });
}

export async function listUserExpenses(userId: string) {
  return prisma.expense.findMany({
    where: { userId },
    orderBy: { date: "desc" },
  });
}

export async function updateExpense(
  id: string,
  userId: string,
  data: Partial<{ title: string; amount: number; date: Date }>
) {
  return prisma.expense.updateMany({
    where: { id, userId },
    data,
  });
}

export async function deleteExpense(id: string, userId: string) {
  return prisma.expense.deleteMany({
    where: { id, userId },
  });
}
