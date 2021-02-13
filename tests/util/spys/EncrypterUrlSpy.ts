import { EncrypterUrl } from '@/data/protocols';

import faker from 'faker';

export class EncrypterUrlSpy implements EncrypterUrl {
  params: EncrypterUrl.Params | null = null;

  result = faker.random.uuid();

  async encrypt(params: EncrypterUrl.Params): Promise<EncrypterUrl.Result> {
    this.params = params;
    return this.result;
  }
}
