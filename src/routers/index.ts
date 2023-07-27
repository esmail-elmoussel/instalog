import express from "express";
import { userRouter } from "./user.router";
import { loggerMiddleware } from "../middlewares";

const router = express.Router();

router.use(loggerMiddleware);

router.get("/", function (req, res) {
  res.send("Hello World!");
});

router.use("/users", userRouter);

export { router };
