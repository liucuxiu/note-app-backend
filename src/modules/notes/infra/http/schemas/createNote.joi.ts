import Joi from 'joi';

export const createNoteSchema = Joi.object({
  title: Joi.string().required().max(500),
  content: Joi.string().required().max(2000),
});