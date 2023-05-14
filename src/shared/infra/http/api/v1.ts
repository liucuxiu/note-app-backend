import express from 'express';
import { userRouter } from '../../../../modules/users/infra/http/routes';
import { noteRouter } from '../../../../modules/notes/infra/http/routes';

export const v1Router = express.Router();

v1Router.use('/user', userRouter);
v1Router.use('/notes', noteRouter);

