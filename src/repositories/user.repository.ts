import { PrismaClient } from "@prisma/client";

export class UserRepository {
  private readonly schema;

  constructor(db: PrismaClient) {
    this.schema = db.users;
  }

  getAll = async () => {
    return this.schema.findMany();
  };
}
