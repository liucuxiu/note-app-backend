import express from 'express';
import { createNoteController } from '../../../useCases/createNote';
import { validateSchema } from '../../../../../shared/infra/http/middlewares/validateRequestBody.middleware';
import { createNoteSchema } from '../schemas/createNote.joi';
import { isAuthenticated } from '../../../../../shared/infra/http/middlewares/authenticate.middleware';
import { getNoteListController } from '../../../useCases/getNoteList';
import { getNoteByIdController } from '../../../useCases/getNoteById';
import { deleteNoteController } from '../../../useCases/deleteNote';
import { editNoteController } from '../../../useCases/editNote';

export const noteRouter = express.Router();

noteRouter.get('/',
  isAuthenticated(),
  (req, res) => getNoteListController.execute(req, res));

noteRouter.post('/',
  isAuthenticated(),
  validateSchema(createNoteSchema),
  (req: any, res: any) => createNoteController.execute(req, res));

noteRouter.patch('/:id',
  isAuthenticated(),
  (req: any, res: any) => editNoteController.execute(req, res));

noteRouter.delete('/:id',
  isAuthenticated(),
  (req: any, res: any) => deleteNoteController.execute(req, res));

noteRouter.get('/:id',
  isAuthenticated(),
  (req, res) => getNoteByIdController.execute(req, res)
);