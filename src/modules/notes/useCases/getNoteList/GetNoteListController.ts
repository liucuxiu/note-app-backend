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
    try {
      //Generate a function get list and pagination



      const listNote = await this.useCase.execute(userId);
      return this.ok(res, listNote);
    }
    catch (err) {
      return this.fail(res, err as string);
    }
  }
}