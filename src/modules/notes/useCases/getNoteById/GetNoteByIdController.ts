import { BaseController } from '../../../../shared/infra/http/controller/BaseController';
import { GetNoteById } from './GetNoteById';
import { GetNoteByIdDTO } from './GetNoteByIdDTO';

export class GetNoteByIdController extends BaseController {
  private useCase: GetNoteById;

  constructor(useCase: GetNoteById) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(req: any, res: any): Promise<any> {
    const { userId } = req.decoded;
    const { id } = req.params;

    try {
      const noteDTO: GetNoteByIdDTO = { userId, noteId: id };
      const note = await this.useCase.execute(noteDTO);
      return this.ok(res, note);
    }
    catch (err) {
      return this.fail(res, err as string);
    }
  }
}