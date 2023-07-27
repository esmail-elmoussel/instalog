import express from "express";
import { eventController } from "../container";

const eventRouter = express.Router();

eventRouter.get("/", eventController.getAll);

export { eventRouter };
