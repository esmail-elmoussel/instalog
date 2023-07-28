import { db } from "../src/container";
import { logger } from "../src/utils";

async function main() {
  await db.user.upsert({
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
    await db.$disconnect();

    logger.info("Seed completed successfully!");
  })
  .catch(async (err) => {
    await db.$disconnect();

    logger.info(`Seed failed due to ${err}`);
  });
