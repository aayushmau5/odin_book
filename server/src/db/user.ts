import prisma from "./prismaClient";

export function getAllUsers() {
  return prisma.user.findMany();
}

type User = {
  email: string;
  firstName: string;
  lastName: string;
  displayImage?: string;
};

export function createUser(data: User) {
  return prisma.user.create({
    data,
  });
}

export function getUserByEmail(email: string) {
  return prisma.user.findUnique({ where: { email } });
}
