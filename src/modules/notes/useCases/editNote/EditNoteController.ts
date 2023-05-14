import { BaseController } from '../../../../shared/infra/http/controller/BaseController';
import { EditNoteUseCase } from './EditNoteUseCase';
import { NoteNotFoundError } from '../../error/noteError';

export class EditNoteController extends BaseController {
  private useCase: EditNoteUseCase;

  constructor(useCase: EditNoteUseCase) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(req: any, res: any): Promise<any> {
    const { userId } = req.decoded;
    const { id } = req.params;
    const { title, content } = req.body;

    try {
      const editNote = await this.useCase.execute({ userId, noteId: id, title, content });
      return this.ok(res, editNote);
    }
    catch (err) {
      if (err instanceof NoteNotFoundError) {
        return this.notFound(res, err.message);
      }
      return this.fail(res, err as string);
    }
  }
}