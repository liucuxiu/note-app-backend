import { UseCase } from '../../../../shared/core/UseCase';
import { INoteRepo } from '../../repos/noteRepo';
import { DeleteNoteDTO } from './DeleteNoteDTO';
import { NoteNotFoundError } from '../../error/noteError';
import { NoteMapper } from '../../mappers/noteMapper';

export class DeleteNoteUseCase implements UseCase<any, any> {
  private noteRepo: INoteRepo;

  constructor(noteRepo: INoteRepo) {
    this.noteRepo = noteRepo;
  }

  async execute(deleteNoteDTO: DeleteNoteDTO): Promise<any> {
    const { userId, noteId } = deleteNoteDTO;
    const note = await this.noteRepo.delete(userId, noteId);

    if (!note) throw new NoteNotFoundError();

    return NoteMapper.toDTO(note);
  }
}