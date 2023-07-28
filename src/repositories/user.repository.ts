import { PrismaClient, User } from "@prisma/client";

export class UserRepository {
  private readonly schema;

  constructor(private readonly db: PrismaClient) {
    this.schema = db.user;
  }

  getRandomOne = async (): Promise<User | undefined> => {
    const [user] = (await this.db
      .$queryRaw`SELECT * FROM users ORDER BY RANDOM() LIMIT 1`) as User[];

    return user;
  };
}
