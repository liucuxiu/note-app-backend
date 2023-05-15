import { INoteRepo } from '../../repos/noteRepo';
import { Note } from '../../domain/Note';
import { GetNoteDTO } from './GetNoteDTO';

export class GetNoteList {
  private noteRepo: INoteRepo;

  constructor(noteRepo: INoteRepo) {
    this.noteRepo = noteRepo;
  }

  async execute(getNoteDTO: GetNoteDTO): Promise<any> {
    const { userId, skip, limit } = getNoteDTO;
    const noteList: Note[] = await this.noteRepo.findNotesByUserId(userId, skip, limit);
    return noteList.map(note => {
      return {
        id: note.noteId,
        userId: note.userId,
        title: note.title,
        content: note.shortContent,
        createdAt: note.createdAt,
        updatedAt: note.updatedAt,
      };
    });
  }
}