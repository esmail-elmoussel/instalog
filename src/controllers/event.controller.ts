import { Request, Response } from "express";
import { EventService } from "../services/event.service";

export class EventController {
  constructor(private readonly eventService: EventService) {}

  getAll = async (req: Request, res: Response) => {
    const events = await this.eventService.getAll();

    res.json(events);
  };
}
