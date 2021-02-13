import { DbLoadUrl } from '@/data/usecases';
import { LoadUrl } from '@/domain/usecases';
import { LoadUrlByShortRepositorySpy } from '@/tests/util';

import faker from 'faker';

const makeFakeRequest = (): LoadUrl.Params => ({
  shortUrl: faker.random.uuid(),
});

describe('DbLoadUrl', () => {
  let sut: DbLoadUrl;
  let loadUrlByShortRepositorySpy: LoadUrlByShortRepositorySpy;

  beforeEach(() => {
    loadUrlByShortRepositorySpy = new LoadUrlByShortRepositorySpy();
    sut = new DbLoadUrl(loadUrlByShortRepositorySpy);
  });

  it('deverá chamar o LoadUrlByShortRepository com os valores corretos', async () => {
    const request = makeFakeRequest();
    await sut.loadUrl(request);
    expect(loadUrlByShortRepositorySpy.params).toEqual({
      shortUrl: request.shortUrl,
    });
  });
});
