import { Prisma, PrismaClient } from "@prisma/client";
import { PaginationResult } from "../types/pagination.types";
import { GetEventsDTO } from "../dtos";

export class EventRepository {
  private readonly schema;

  constructor(db: PrismaClient) {
    this.schema = db.event;
  }

  getAll = async (getEventsDTO: GetEventsDTO) => {
    const skip = (getEventsDTO.pageNumber - 1) * getEventsDTO.pageSize;

    const where: Prisma.EventWhereInput = {};

    if (getEventsDTO.search) {
      where.OR = [
        { id: { contains: getEventsDTO.search } },
        { name: { contains: getEventsDTO.search } },
        { user: { id: { contains: getEventsDTO.search } } },
        { user: { name: { contains: getEventsDTO.search } } },
        { user: { email: { contains: getEventsDTO.search } } },
      ];
    }

    const events = await this.schema.findMany({
      skip,
      take: getEventsDTO.pageSize,
      select: {
        id: true,
        name: true,
        createdAt: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      where,
      orderBy: { updatedAt: "desc" },
    });

    const totalCount = await this.schema.count({ where });

    const totalPages = Math.ceil(totalCount / getEventsDTO.pageSize);

    const paginationResult: PaginationResult<typeof events> = {
      totalCount,
      currentPage: getEventsDTO.pageNumber,
      totalPages,
      pageSize: getEventsDTO.pageSize,
      items: events,
    };

    return paginationResult;
  };

  create = async (entity: Prisma.EventUncheckedCreateInput) => {
    return this.schema.create({ data: entity });
  };
}
