import { serverError } from '@/presentation/helper';
import { Controller, HttpResponse } from '@/presentation/protocols';

export class HandleErrorsControllerDecorator<T extends Controller>
  implements Controller<T> {
  constructor(private readonly controller: T) {}

  async handle(request: any): Promise<HttpResponse> {
    try {
      const httpResponse = await this.controller.handle(request);

      return httpResponse;
    } catch (err) {
      return serverError(err);
    }
  }
}
