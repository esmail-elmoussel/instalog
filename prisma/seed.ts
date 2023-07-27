import { PrismaClient } from "@prisma/client";
import { logger } from "../src/utils";

const prisma = new PrismaClient();

async function main() {
  await prisma.users.upsert({
    where: { email: "elmoussel12@gmail.com" },
    update: {},
    create: {
      email: "elmoussel12@gmail.com",
      name: "Esmail",
      events: {
        create: {
          name: "test",
        },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();

    logger.info("Seed completed successfully!");
  })
  .catch(async (err) => {
    await prisma.$disconnect();

    logger.info(`Seed failed due to ${err}`);
  });
