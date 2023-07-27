import { PrismaClient } from "@prisma/client";
import { EventController } from "./controllers/event.controller";
import { EventRepository } from "./repositories/event.repository";
import { EventService } from "./services/event.service";

export const db = new PrismaClient();

export const eventRepository = new EventRepository(db);
export const eventService = new EventService(eventRepository);
export const eventController = new EventController(eventService);
