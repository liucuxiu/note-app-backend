import { Note } from '../domain/Note';
import { EditNoteDTO } from '../useCases/editNote/EditNoteDTO';

export interface INoteRepo {
  findNoteById(userId: string, noteId: string): Promise<any>;

  findNotesByUserId(userId: string, skip: number | undefined, limit: number | undefined): Promise<any>;

  save(note: Note): Promise<Note>;

  delete(userId: string, noteId: string): Promise<any>;

  update(note: EditNoteDTO): Promise<any>;
}