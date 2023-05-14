import { BaseController } from '../../../../shared/infra/http/controller/BaseController';
import { CreateNoteUseCase } from './CreateNoteUseCase';

export class CreateNoteController extends BaseController {
  private useCase: CreateNoteUseCase;

  constructor(useCase: CreateNoteUseCase) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(req: any, res: any): Promise<any> {
    const { userId } = req.decoded;
    const { title, content } = req.body;

    try {
      const note = await this.useCase.execute({ userId, title, content });
      return this.ok(res, note);
    }
    catch (err) {
      return this.fail(res, err as string);
    }
  }
}