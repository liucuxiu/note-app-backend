import { GetNoteByIdController } from './GetNoteByIdController';
import { GetNoteById } from './GetNoteById';
import { noteRepo } from '../../repos';

const getNoteByIdUseCase = new GetNoteById(noteRepo);
const getNoteByIdController = new GetNoteByIdController(getNoteByIdUseCase);

export { getNoteByIdUseCase, getNoteByIdController };