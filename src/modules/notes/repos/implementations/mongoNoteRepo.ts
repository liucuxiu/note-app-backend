import { INoteRepo } from '../noteRepo';
import { NoteMapper } from '../../mappers/noteMapper';
import { NoteModel } from '../../../../shared/infra/database/mongo/models/Note';
import { Note } from '../../domain/Note';
import { EditNoteDTO } from '../../useCases/editNote/EditNoteDTO';

export class MongoNoteRepo implements INoteRepo {
  async findNoteById(userId: string, noteId: string): Promise<any> {
    const note = await NoteModel.findOne({
      _id: noteId,
      userId,
      isDeleted: false
    });

    return note ? NoteMapper.toDomain(note) : null;
  }

  async findNotesByUserId(userId: string): Promise<any> {
    //todo: query limit offset
    const listNotes = await NoteModel.find({
      userId,
      isDeleted: false
    }).sort([['createdAt', -1]]);
    return listNotes.map(note => NoteMapper.toDomain(note));
  }

  async save(note: Note): Promise<any> {
    const persistenceNote = NoteMapper.toPersistence(note);
    const saveResult = await NoteModel.create(persistenceNote);
    return NoteMapper.toDomain(saveResult);
  }

  async update(note: EditNoteDTO): Promise<any> {
    const updateResult = await NoteModel.findByIdAndUpdate(
      note.noteId,
      { title: note.title, content: note.content },
      { new: true }
    );
    return updateResult ? NoteMapper.toDomain(updateResult) : null;
  }

  async delete(userId: string, noteId: string): Promise<any> {
    const deletedNote = await NoteModel.findByIdAndUpdate(
      noteId,
      { isDeleted: true },
      { new: true }
    );
    return deletedNote ? NoteMapper.toDomain(deletedNote) : null;
  }

}