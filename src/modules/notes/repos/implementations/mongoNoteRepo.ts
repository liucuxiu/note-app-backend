import { INoteRepo } from '../noteRepo';
import { NoteMapper } from '../../mappers/noteMapper';
import { NoteModel } from '../../../../shared/infra/database/mongo/models/Note';

export class MongoNoteRepo implements INoteRepo {
  async findNoteById(noteId: string): Promise<any> {
    return null;
  }

  async findNotesByUserId(userId: string): Promise<any> {
    return null;
  }

  async save(note: any): Promise<any> {
    const persistenceNote = NoteMapper.toPersistence(note);
    const saveResult = await NoteModel.create(persistenceNote);
    return NoteMapper.toDomain(saveResult);
  }

  async delete(noteId: string): Promise<any> {
    return null;
  }

}