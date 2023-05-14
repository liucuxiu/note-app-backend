import { INoteRepo } from '../noteRepo';
import { NoteMapper } from '../../mappers/noteMapper';
import { NoteModel } from '../../../../shared/infra/database/mongo/models/Note';

export class MongoNoteRepo implements INoteRepo {
  async findNoteById(userId: string, noteId: string): Promise<any> {
    const note = await NoteModel.findById({
      _id: noteId,
      userId
    });
    if (note) {
      return NoteMapper.toDomain(note);
    }
    return null;
  }

  async findNotesByUserId(userId: string): Promise<any> {
    //todo: query limit offset
    const listNotes = await NoteModel.find({
      userId
    }).sort([['createdAt', -1]]);
    return listNotes.map(note => NoteMapper.toDomain(note));
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