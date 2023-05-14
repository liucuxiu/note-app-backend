import { Note } from '../domain/Note';

export interface INoteRepo {
  findNoteById(noteId: string): Promise<any>;

  findNotesByUserId(userId: string): Promise<any>;

  save(note: Note): Promise<Note>;

  delete(noteId: string): Promise<any>;

}