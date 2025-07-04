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
