import { INoteRepo } from '../noteRepo';

export class MongoNoteRepo implements INoteRepo {
  async findNoteById(noteId: string): Promise<any> {
    return null;
  }

  async findNotesByUserId(userId: string): Promise<any> {
    return null;
  }

  async save(note: any): Promise<any> {
    return null;
  }

  async delete(noteId: string): Promise<any> {
    return null;
  }

}