import "express-async-errors";
import express, { json } from "express";
import { apiRouter } from "./routers";
import { loggerMiddleware } from "./middlewares";
import {
  NotFoundError,
  errorHandlerMiddleware,
} from "@esmailelmoussel/microservices-common";
import cors from "cors";

const app = express();

app.use(cors());
app.use(json());

app.use(loggerMiddleware);

app.use("/api/v1", apiRouter);

app.all("*", () => {
  throw new NotFoundError();
});

app.use(errorHandlerMiddleware);

export { app };
