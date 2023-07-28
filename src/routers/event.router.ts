import express from "express";
import { eventController } from "../container";
import { requestValidationMiddleware } from "../middlewares";
import { createEventSchema, getEventsSchema } from "../dtos";

const eventRouter = express.Router();

eventRouter.get(
  "/",
  requestValidationMiddleware(getEventsSchema, "query"),
  eventController.getAll,
);

eventRouter.post(
  "/",
  requestValidationMiddleware(createEventSchema),
  eventController.create,
);

export { eventRouter };
