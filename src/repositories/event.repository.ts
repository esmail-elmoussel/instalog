import { Prisma, PrismaClient } from "@prisma/client";
import { PaginationDTO, PaginationResult } from "../types/pagination.types";

export class EventRepository {
  private readonly schema;

  constructor(db: PrismaClient) {
    this.schema = db.event;
  }

  getAll = async (pagination: PaginationDTO) => {
    const skip = (pagination.pageNumber - 1) * pagination.pageSize;

    const events = await this.schema.findMany({
      skip,
      take: pagination.pageSize,
      select: {
        id: true,
        name: true,
        createdAt: true,
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
      orderBy: { updatedAt: "desc" },
    });

    const totalCount = await this.schema.count();

    const totalPages = Math.ceil(totalCount / pagination.pageSize);

    const paginationResult: PaginationResult<typeof events> = {
      totalCount,
      currentPage: pagination.pageNumber,
      totalPages,
      pageSize: pagination.pageSize,
      items: events,
    };

    return paginationResult;
  };

  create = async (entity: Prisma.EventUncheckedCreateInput) => {
    return this.schema.create({ data: entity });
  };
}
