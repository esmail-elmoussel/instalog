import { EventRepository } from "../repositories";

export class EventService {
  constructor(private readonly eventRepository: EventRepository) {}

  getAll = async () => {
    return this.eventRepository.getAll();
  };
}
