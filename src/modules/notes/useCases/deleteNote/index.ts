import { DeleteNoteController } from './DeleteNoteController';
import { DeleteNoteUseCase } from './DeleteNoteUseCase';
import { noteRepo } from '../../repos';

const deleteNoteUseCase = new DeleteNoteUseCase(noteRepo);
const deleteNoteController = new DeleteNoteController(deleteNoteUseCase);

export { deleteNoteUseCase, deleteNoteController };