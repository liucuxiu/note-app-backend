import Joi from 'joi';

export const editNoteSchema = Joi.object({
  title: Joi.string().max(500),
  content: Joi.string().max(2000),
});