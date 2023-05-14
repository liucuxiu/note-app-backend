import { CreateNoteController } from './CreateNoteController';
import { CreateNoteUseCase } from './CreateNoteUseCase';
import { noteRepo } from '../../repos';

const createNoteUseCase = new CreateNoteUseCase(noteRepo);
const createNoteController = new CreateNoteController(createNoteUseCase);

export { createNoteUseCase, createNoteController };