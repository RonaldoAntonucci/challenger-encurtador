import { AddShortUrlRepository } from '@/data/protocols';

import faker from 'faker';

export class AddShortUrlRepositorySpy implements AddShortUrlRepository {
  params: AddShortUrlRepository.Params | null = null;

  result = faker.random.uuid();

  async addShortUrl(
    params: AddShortUrlRepository.Params,
  ): Promise<AddShortUrlRepository.Result> {
    this.params = params;
    return this.result;
  }
}
