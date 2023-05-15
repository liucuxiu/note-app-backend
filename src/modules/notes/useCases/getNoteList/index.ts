import { noteRepo } from '../../repos';

import { GetNoteList } from './GetNoteList';
import { GetNoteListController } from './GetNoteListController';

const getNoteListUseCase = new GetNoteList(noteRepo);
const getNoteListController = new GetNoteListController(getNoteListUseCase);
export { getNoteListUseCase, getNoteListController };



