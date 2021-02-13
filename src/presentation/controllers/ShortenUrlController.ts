import { EncryptUrl } from '@/domain/usecases';
import { success, newUrlMap } from '../helper';
import { Controller, HttpResponse } from '../protocols';

export class ShortenUrlController
  implements Controller<ShortenUrlController.Request> {
  constructor(private readonly encryptUrl: EncryptUrl) {}

  async handle(
    request: ShortenUrlController.Request,
  ): Promise<HttpResponse<ShortenUrlController.Response>> {
    const newUrl = await this.encryptUrl.encrypt(request);

    return success<ShortenUrlController.Response>({
      newUrl: newUrlMap(newUrl),
    });
  }
}

export namespace ShortenUrlController {
  export type Request = {
    url: string;
  };

  export type Response = {
    newUrl: string;
  };
}
