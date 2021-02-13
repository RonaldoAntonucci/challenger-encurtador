import { Middleware, Validation, HttpResponse } from '../protocols';
import { badRequest, serverError, success } from '../helper';

export class ValidationMiddleware
  implements Middleware<ValidationMiddleware.Request> {
  constructor(private readonly validator: Validation) {}

  async handle(
    httpRequest: ValidationMiddleware.Request,
  ): Promise<HttpResponse> {
    try {
      const error = this.validator.validate(httpRequest);
      if (error) {
        return badRequest(error);
      }

      return success({});
    } catch (err) {
      return serverError(err);
    }
  }
}

export namespace ValidationMiddleware {
  export type Request = {
    body: any;
  };
}
