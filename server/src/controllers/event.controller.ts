import { Request, Response } from "express";
import { EventService, UserService } from "../services";
import { CreateEventDTO, GetEventsDTO } from "../dtos";
import { logger } from "../utils";

export class EventController {
  constructor(
    private readonly service: EventService,
    private readonly userService: UserService,
  ) {}

  getAll = async (req: Request, res: Response) => {
    const { query } = req as unknown as { query: GetEventsDTO };

    const events = await this.service.getAll(query);

    res.json(events);
  };

  create = async (req: Request, res: Response) => {
    const { body } = req as { body: CreateEventDTO };

    const user = await this.userService.getRandomOne();

    if (!user) {
      const err = "No users exists, please run seed firsts!";

      logger.error(err);
      throw new Error(err);
    }

    const events = await this.service.create({
      userId: user.id, // putting a random userId for demo purposes!
      ...body,
    });

    res.json(events);
  };
}
