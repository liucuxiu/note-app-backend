export interface INoteRepo {
  findNoteById(noteId: string): Promise<any>;

  findNotesByUserId(userId: string): Promise<any>;

  save(note: any): Promise<any>;

  delete(noteId: string): Promise<any>;

}