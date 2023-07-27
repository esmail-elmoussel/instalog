import express from "express";
import { eventRouter } from "./event.router";
import { loggerMiddleware } from "../middlewares";

const router = express.Router();

router.use(loggerMiddleware);

router.get("/health", function (req, res) {
  res.send(200);
});

router.use("/events", eventRouter);

export { router };
