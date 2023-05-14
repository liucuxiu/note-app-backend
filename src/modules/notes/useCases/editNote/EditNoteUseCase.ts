import { UseCase } from '../../../../shared/core/UseCase';
import { INoteRepo } from '../../repos/noteRepo';
import { EditNoteDTO } from './EditNoteDTO';
import { NoteMapper } from '../../mappers/noteMapper';

export class EditNoteUseCase implements UseCase<any, any> {
  private noteRepo: INoteRepo;

  constructor(noteRepo: INoteRepo) {
    this.noteRepo = noteRepo;
  }

  async execute(noteDTO: EditNoteDTO): Promise<any> {
    const existedNote = await this.noteRepo.findNoteById(noteDTO.userId, noteDTO.noteId);

    if (!existedNote) throw new Error('Note not found');

    const editedNote = await this.noteRepo.update(noteDTO);

    return NoteMapper.toDTO(editedNote);
  }
}