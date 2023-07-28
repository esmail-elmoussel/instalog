import { Prisma, PrismaClient } from "@prisma/client";

export class EventRepository {
  private readonly schema;

  constructor(db: PrismaClient) {
    this.schema = db.events;
  }

  getAll = async () => {
    return this.schema.findMany();
  };

  create = async (entity: Prisma.eventsUncheckedCreateInput) => {
    return this.schema.create({ data: entity });
  };
}
