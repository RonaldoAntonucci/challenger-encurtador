import { LoadUrl } from '@/domain/usecases';
import { notFound, redirect } from '../helper';
import { Controller, HttpNotFound, HttpRedirect } from '../protocols';

export class ShowUrlController
  implements Controller<ShowUrlController.Request> {
  constructor(private readonly loadUrl: LoadUrl) {}

  async handle({
    shortUrl,
  }: ShowUrlController.Request): Promise<HttpRedirect | HttpNotFound> {
    const url = await this.loadUrl.loadUrl({ shortUrl });

    if (!url) {
      return notFound();
    }

    return redirect(url);
  }
}

export namespace ShowUrlController {
  export type Request = {
    shortUrl: string;
  };

  export type Response = string | HttpNotFound;
}
