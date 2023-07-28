import { PrismaClient } from "@prisma/client";
import { EventController } from "./controllers";
import { EventRepository, UserRepository } from "./repositories";
import { EventService, UserService } from "./services";

export const db = new PrismaClient();

const eventRepository = new EventRepository(db);
const userRepository = new UserRepository(db);

const eventService = new EventService(eventRepository);
const userService = new UserService(userRepository);

export const eventController = new EventController(eventService, userService);
