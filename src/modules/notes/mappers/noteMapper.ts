import { NoteDTO } from '../dtos/NoteDTO';
import { Note } from '../domain/Note';

export class NoteMapper {
  public static toDTO(note: Note): NoteDTO {
    return {
      id: note.noteId,
      userId: note.userId,
      title: note.title,
      content: note.content,
      createdAt: note.createdAt,
      updatedAt: note.updatedAt,
    };
  }

  public static toDomain(raw: any) {
    return Note.create({
      userId: raw.userId,
      title: raw.title,
      content: raw.content,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt
    }, raw._id);
  }

  public static toPersistence(note: Note) {
    return {
      _id: note.noteId,
      userId: note.userId,
      title: note.title,
      content: note.content,
      createdAt: note.createdAt,
      updatedAt: note.updatedAt
    };
  }
}