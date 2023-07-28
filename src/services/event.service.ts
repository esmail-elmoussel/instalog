import { EventCreationDTO } from "../dtos";
import { EventRepository } from "../repositories";

export class EventService {
  constructor(private readonly repository: EventRepository) {}

  getAll = async () => {
    return this.repository.getAll();
  };

  create = async (entity: {
    name: EventCreationDTO["name"];
    userId: string;
  }) => {
    return this.repository.create(entity);
  };
}
