import { PrismaClient } from "@prisma/client";

export class EventRepository {
  constructor(private readonly db: PrismaClient) {}

  getAll = async () => {
    return this.db.events.findMany();
  };
}
