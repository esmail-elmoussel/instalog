import express from "express";
import { eventRouter } from "./event.router";
import { loggerMiddleware } from "../middlewares";
import {
  NotFoundError,
  errorHandlerMiddleware,
} from "@esmailelmoussel/microservices-common";

const router = express.Router();

router.use(loggerMiddleware);

router.get("/health", function (req, res) {
  res.sendStatus(200);
});

router.use("/events", eventRouter);

router.all("*", () => {
  throw new NotFoundError();
});

router.use(errorHandlerMiddleware);

export { router };
