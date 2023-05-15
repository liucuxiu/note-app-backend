import { CreateNoteUseCase } from './CreateNoteUseCase';
import { noteRepo } from '../../repos';
import { CreateNoteController } from './CreateNoteController';
import httpMocks from 'node-mocks-http';

jest.mock('./CreateNoteUseCase', () => {
  const useCase = {
    execute: jest.fn()
  };
  return { CreateNoteUseCase: jest.fn(() => useCase) };
});

const useCaseMock = new CreateNoteUseCase(noteRepo);
const executeMock = useCaseMock.execute as jest.Mock;

const controller = new CreateNoteController(useCaseMock);

beforeEach(() => {
  jest.clearAllMocks();
});

afterEach(() => {
  jest.resetAllMocks();
});

describe('CreateNoteController', () => {
  it('should call use case with correct arguments and return 200 status code on success', async () => {
    // Arrange
    const mockNoteDTO = {
      title: 'title',
      content: 'content',
    };
    const mockUserId = '123';
    const mockCreateNoteResult = {
      title: 'title',
      content: 'content',
    };
    executeMock.mockResolvedValue(mockCreateNoteResult);
    const mockReq = httpMocks.createRequest({
      body: mockNoteDTO,
      decoded: { userId: mockUserId },
    });
    const mockRes = httpMocks.createResponse();

    // Act
    await controller.executeImpl(mockReq, mockRes);
    let data = mockRes._getJSONData();

    // Assert
    expect(useCaseMock.execute).toHaveBeenCalledWith({
      ...mockNoteDTO,
      userId: mockUserId,
    });
    expect(mockRes.statusCode).toBe(200);
    expect(data).toEqual(mockCreateNoteResult);
  });
});