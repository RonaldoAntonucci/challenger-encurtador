import { GenerateShortUrl } from '@/data/protocols';

import faker from 'faker';

export class GenerateShortUrlSpy implements GenerateShortUrl {
  params: GenerateShortUrl.Params | null = null;

  result = faker.random.uuid();

  async generate(
    params: GenerateShortUrl.Params,
  ): Promise<GenerateShortUrl.Result> {
    this.params = params;
    return this.result;
  }
}
