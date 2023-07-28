import { CustomError } from "@esmailelmoussel/microservices-common";
import Joi from "joi";

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(private errors: Joi.ValidationErrorItem[]) {
    super("Request validation error!");
  }

  serializeErrors() {
    return this.errors.map((err) => {
      return {
        message: err.message.replace(/['"]/g, ""),
        field: err.path[0] as string,
      };
    });
  }
}
