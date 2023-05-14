import Joi from 'joi';

export const createNoteSchema = Joi.object({
  title: Joi.string().required().max(1000),
  content: Joi.string().required().max(1000),
})