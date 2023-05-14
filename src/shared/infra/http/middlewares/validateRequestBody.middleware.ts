import Joi, { ObjectSchema } from 'joi';

export const validateSchema = (schema: ObjectSchema = Joi.object({})): ((req: any, res: any, next: any) => Promise<any>) => {
  return async (req, res, next) => {
    console.log("haha", req)
    const result = schema.validate(req.body);
    if (result.error) {
      res.status(400);
      res.json({
        error: {
          message: result.error.message
        }
      });
      return res;
    }

    next();
  };
};