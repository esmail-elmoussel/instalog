import { CreateEventDTO } from "../dtos";
import { EventRepository } from "../repositories";
import { PaginationDTO } from "../types/pagination.types";

export class EventService {
  constructor(private readonly repository: EventRepository) {}

  getAll = async (pagination: PaginationDTO) => {
    return this.repository.getAll(pagination);
  };

  create = async (entity: { name: CreateEventDTO["name"]; userId: string }) => {
    return this.repository.create(entity);
  };
}
