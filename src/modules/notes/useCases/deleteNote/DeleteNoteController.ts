import { BaseController } from '../../../../shared/infra/http/controller/BaseController';
import { DeleteNoteDTO } from './DeleteNoteDTO';
import { DeleteNoteUseCase } from './DeleteNoteUseCase';
import { NoteNotFoundError } from '../../error/noteError';

export class DeleteNoteController extends BaseController {
  private useCase: DeleteNoteUseCase;

  constructor(useCase: DeleteNoteUseCase) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(req: any, res: any): Promise<any> {
    const { userId } = req.decoded;
    const { id } = req.params;

    try {
      const deleteNoteDTO: DeleteNoteDTO = { userId, noteId: id };
      const result = await this.useCase.execute(deleteNoteDTO);
      return this.ok(res, result);
    }
    catch (err) {
      if (err instanceof NoteNotFoundError) {
        return this.notFound(res, err.message);
      }
      return this.fail(res, err as string);
    }
  }
}