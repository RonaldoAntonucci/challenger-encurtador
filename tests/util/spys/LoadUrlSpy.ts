import { LoadUrl } from '@/domain/usecases';

import faker from 'faker';

export class LoadUrlSpy implements LoadUrl {
  params: LoadUrl.Params | null = null;

  result = faker.random.uuid();

  async loadUrl(params: LoadUrl.Params): Promise<LoadUrl.Result> {
    this.params = params;
    return this.result;
  }
}
