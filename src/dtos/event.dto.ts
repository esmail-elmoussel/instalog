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
  search?: string;
}

export const getEventsSchema = Joi.object<GetEventsDTO>({
  pageNumber: Joi.number().optional().default(1),
  pageSize: Joi.number().optional().default(10),
  search: Joi.string().optional(),
});
