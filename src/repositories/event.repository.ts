import { Prisma, PrismaClient } from "@prisma/client";
import { Pagination } from "../types/pagination.types";

export class EventRepository {
  private readonly schema;

  constructor(db: PrismaClient) {
    this.schema = db.event;
  }

  getAll = async (pagination: Pagination) => {
    const skip = (pagination.pageNumber - 1) * pagination.pageSize;

    const events = await this.schema.findMany({
      skip,
      take: pagination.pageSize,
      orderBy: { updatedAt: "desc" },
    });

    const totalCount = await this.schema.count();

    const totalPages = Math.ceil(totalCount / pagination.pageSize);

    return {
      totalCount,
      currentPage: pagination.pageNumber,
      totalPages,
      pageSize: pagination.pageSize,
      items: [events],
    };
  };

  create = async (entity: Prisma.EventUncheckedCreateInput) => {
    return this.schema.create({ data: entity });
  };
}
