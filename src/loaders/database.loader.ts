import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const db = {
  connect: () => prisma.$connect(),
  disconnect: () => prisma.$disconnect(),
};

export { db };
