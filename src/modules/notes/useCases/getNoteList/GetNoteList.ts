import { INoteRepo } from '../../repos/noteRepo';
import { NoteMapper } from '../../mappers/noteMapper';
import { Note } from '../../domain/Note';

export class GetNoteList {
  private noteRepo: INoteRepo

  constructor(noteRepo: INoteRepo) {
    this.noteRepo = noteRepo;
  }

  async execute(userId: string): Promise<any> {
    const noteList: Note[] = await this.noteRepo.findNotesByUserId(userId);
    return noteList.map(note => NoteMapper.toDTO(note));
  }
}