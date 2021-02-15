import { LoadUrlByShortRepository } from '@/data/protocols';

import faker from 'faker';

export class LoadUrlByShortRepositorySpy implements LoadUrlByShortRepository {
  params: LoadUrlByShortRepository.Params | null = null;

  result: LoadUrlByShortRepository.Result = {
    id: faker.random.uuid(),
    createdAt: new Date(),
    updatedAt: new Date(),
    shortUrl: faker.random.uuid(),
    urlId: faker.random.uuid(),

    url: {
      id: faker.random.uuid(),
      createdAt: new Date(),
      updatedAt: new Date(),
      url: faker.internet.url(),
    },
  };

  async loadUrlByShort(
    params: LoadUrlByShortRepository.Params,
  ): Promise<LoadUrlByShortRepository.Result> {
    this.params = params;
    return this.result;
  }
}
