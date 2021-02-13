import { EncryptUrl } from '@/domain/usecases';
import { Controller, HttpResponse } from '../protocols';

export class ShortenUrlController
  implements Controller<ShortenUrlController.Request> {
  constructor(private readonly encryptUrl: EncryptUrl) {}

  async handle(request: ShortenUrlController.Request): Promise<HttpResponse> {
    await this.encryptUrl.encrypt(request);

    const result = {};

    return result as HttpResponse;
  }
}

export namespace ShortenUrlController {
  export type Request = {
    url: string;
  };
}
