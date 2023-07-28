import express from "express";
import { eventRouter } from "./event.router";

const apiRouter = express.Router();

apiRouter.get("/health", (req, res) => {
  res.sendStatus(200);
});

apiRouter.use("/events", eventRouter);

export { apiRouter };
