import { EncryptUrl } from '@/domain/usecases';

import faker from 'faker';

export class EncryptUrlSpy implements EncryptUrl {
  params: EncryptUrl.Params | null = null;

  result = faker.random.uuid();

  async encrypt(params: EncryptUrl.Params): Promise<EncryptUrl.Result> {
    this.params = params;
    return this.result;
  }
}
