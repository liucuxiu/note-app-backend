import { UseCase } from '../../../../shared/core/UseCase';
import { INoteRepo } from '../../repos/noteRepo';
import { GetNoteByIdDTO } from './GetNoteByIdDTO';
import { NoteMapper } from '../../mappers/noteMapper';

export class GetNoteById implements UseCase<any, any> {
  private noteRepo: INoteRepo;

  constructor(noteRepo: INoteRepo) {
    this.noteRepo = noteRepo;
  }

  async execute(noteDTO: GetNoteByIdDTO): Promise<any> {
    const { userId, noteId } = noteDTO;
    const note = await this.noteRepo.findNoteById(userId, noteId);
    if (!note) {
      throw new Error('Note not found');
    }
    return NoteMapper.toDTO(note);
  }
}