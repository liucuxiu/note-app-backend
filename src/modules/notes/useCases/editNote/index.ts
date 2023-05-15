import { EditNoteController } from './EditNoteController';
import { EditNoteUseCase } from './EditNoteUseCase';
import { noteRepo } from '../../repos';

const editNoteUseCase = new EditNoteUseCase(noteRepo);
const editNoteController = new EditNoteController(editNoteUseCase);

export { editNoteController, editNoteUseCase };