import { CreateEventDTO, GetEventsDTO } from "../dtos";
import { EventRepository } from "../repositories";

export class EventService {
  constructor(private readonly repository: EventRepository) {}

  getAll = async (getEventsDTO: GetEventsDTO) => {
    return this.repository.getAll(getEventsDTO);
  };

  create = async (entity: { name: CreateEventDTO["name"]; userId: string }) => {
    return this.repository.create(entity);
  };
}
