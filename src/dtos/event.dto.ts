import Joi from "joi";

export interface EventCreationDTO {
  name: string;
}

export const createEventSchema = Joi.object<EventCreationDTO>({
  name: Joi.string().required(),
});
