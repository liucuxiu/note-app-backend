import express from 'express';
import { createNoteController } from '../../../useCases/createNote';
import { validateSchema } from '../../../../../shared/infra/http/middlewares/validateRequestBody.middleware';
import { createNoteSchema } from '../schemas/createNote.joi';
import { isAuthenticated } from '../../../../../shared/infra/http/middlewares/authenticate.middleware';

export const noteRouter = express.Router();

noteRouter.get('/', (req, res) => {
  res.send('Hello from note router');
});

noteRouter.post('/',
  isAuthenticated(),
  validateSchema(createNoteSchema), (req: any, res: any) => createNoteController.execute(req, res));

noteRouter.put('/', (req, res) => {
  res.send('Hello from note router');
});

noteRouter.delete('/', (req, res) => {
  res.send('Hello from note router');
});

noteRouter.get('/:id', (req, res) => {
  res.send('Hello from note router');
});