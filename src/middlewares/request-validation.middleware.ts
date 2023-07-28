import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { RequestValidationError } from "../errors";

export const requestValidationMiddleware = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (error) {
      throw new RequestValidationError(error.details);
    }

    next();
  };
};
