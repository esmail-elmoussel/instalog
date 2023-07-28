import { db } from "../src/container";
import { logger } from "../src/utils";

const mockUsers = [
  { name: "Alice Johnson", email: "alice.johnson@example.com" },
  { name: "Bob Smith", email: "bob.smith@example.com" },
  { name: "Emma Watson", email: "emma.watson@example.com" },
  { name: "John Doe", email: "john.doe@example.com" },
  { name: "Lily Williams", email: "lily.williams@example.com" },
  { name: "Michael Brown", email: "michael.brown@example.com" },
  { name: "Sophia Lee", email: "sophia.lee@example.com" },
  { name: "William Clark", email: "william.clark@example.com" },
  { name: "Olivia Miller", email: "olivia.miller@example.com" },
  { name: "James Taylor", email: "james.taylor@example.com" },
];

async function main() {
  Promise.all(
    mockUsers.map(async (user) => {
      await db.user.upsert({
        where: { email: user.email },
        update: {},
        create: {
          email: user.email,
          name: user.name,
        },
      });
    }),
  );
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
