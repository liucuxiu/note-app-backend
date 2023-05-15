import { noteRepo } from '../../repos';
import { CreateNoteUseCase } from './CreateNoteUseCase';
import { Note } from '../../domain/Note';

jest.mock('../../repos/implementations/mongoNoteRepo', () => {
  const repo = {
    save: jest.fn(),
    delete: jest.fn(),
    update: jest.fn(),
    findNoteById: jest.fn(),
    findNotesByUserId: jest.fn()
  };
  return { MongoNoteRepo: jest.fn(() => repo) };
});

const saveMock = noteRepo.save as jest.Mock;
const useCase = new CreateNoteUseCase(noteRepo);

describe('CreateNoteUseCase', () => {
  it('should call the save function of noteRepo', async () => {
    const request = {
      userId: 'userId',
      title: 'title',
      content: 'content',
    }
    const idMock = 'idMock';
    const resultMock = Note.create({
      userId: request.userId,
      title: request.title,
      content: request.content,
    }, idMock);
    saveMock.mockResolvedValue(resultMock);

    const result = await useCase.execute(request);
    expect(noteRepo.save).toHaveBeenCalled();
    expect(result).toEqual({
      id: idMock,
      userId: request.userId,
      title: request.title,
      content: request.content,
    });
  });
});