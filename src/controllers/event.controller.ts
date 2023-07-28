import { Request, Response } from "express";
import { EventService, UserService } from "../services";
import { EventCreationDTO } from "../dtos";

export class EventController {
  constructor(
    private readonly service: EventService,
    private readonly userService: UserService,
  ) {}

  getAll = async (req: Request, res: Response) => {
    const events = await this.service.getAll();

    res.json(events);
  };

  create = async (req: Request, res: Response) => {
    const { body } = req as { body: EventCreationDTO };

    const users = await this.userService.getAll();

    const events = await this.service.create({
      userId: users[0].id, // putting a static userId for demo purposes!
      ...body,
    });

    res.json(events);
  };
}
