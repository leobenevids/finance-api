import prisma from "../prisma/client";

export async function createUser(data: { email: string; password: string }) {
  return prisma.user.create({
    data,
  });
}

export async function findUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
  });
}
