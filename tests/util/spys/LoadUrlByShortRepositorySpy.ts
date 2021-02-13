import { LoadUrlByShortRepository } from '@/data/protocols';

import faker from 'faker';

export class LoadUrlByShortRepositorySpy implements LoadUrlByShortRepository {
  params: LoadUrlByShortRepository.Params | null = null;

  result = faker.internet.url();

  async loadUrlByShort(
    params: LoadUrlByShortRepository.Params,
  ): Promise<LoadUrlByShortRepository.Result> {
    this.params = params;
    return this.result;
  }
}
