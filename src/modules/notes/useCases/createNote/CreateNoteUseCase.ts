import { UseCase } from '../../../../shared/core/UseCase';
import { INoteRepo } from '../../repos/noteRepo';
import { NoteDTO } from '../../dtos/NoteDTO';
import { CreateNoteDTO } from './CreateNoteDTO';
import { Note } from '../../domain/Note';
import { NoteMapper } from '../../mappers/noteMapper';

export class CreateNoteUseCase implements UseCase<any, any> {
  constructor(private noteRepo: INoteRepo) {}

  async execute(createNoteDTO: CreateNoteDTO): Promise<NoteDTO> {
    const note = Note.create(createNoteDTO);
    const savedNote = await this.noteRepo.save(note);

    return NoteMapper.toDTO(savedNote);
  }
}