import { BaseController } from '../../../../shared/infra/http/controller/BaseController';
import { GetNoteList } from './GetNoteList';

export class GetNoteListController extends BaseController {
  private useCase: GetNoteList;

  constructor(useCase: GetNoteList) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(req: any, res: any): Promise<any> {
    const { userId } = req.decoded;
    const { page, limit } = req.query;
    const skip = (page - 1) * limit;

    try {
      const listNote = await this.useCase.execute({
        userId, skip, limit
      });
      return this.ok(res, listNote);
    }
    catch (err) {
      return this.fail(res, err as string);
    }
  }
}