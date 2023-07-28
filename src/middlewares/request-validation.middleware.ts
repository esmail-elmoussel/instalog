import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { RequestValidationError } from "../errors";

export const requestValidationMiddleware = (
  schema: Joi.ObjectSchema,
  source: "body" | "query" = "body",
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req[source], {
      abortEarly: false,
      allowUnknown: false,
    });

    req[source] = value;

    if (error) {
      throw new RequestValidationError(error.details);
    }

    next();
  };
};
