import express from "express";
import { userController } from "../container";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send(userController.get());
});

export { userRouter };
