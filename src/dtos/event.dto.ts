import Joi from "joi";

export interface CreateEventDTO {
  name: string;
}

export const createEventSchema = Joi.object<CreateEventDTO>({
  name: Joi.string().required(),
});

export interface GetEventsDTO {
  pageNumber: number;
  pageSize: number;
}

export const getEventsSchema = Joi.object<GetEventsDTO>({
  pageNumber: Joi.number().optional().default(1),
  pageSize: Joi.number().optional().default(10),
});
