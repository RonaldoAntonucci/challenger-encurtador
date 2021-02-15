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

  const expireTime: number = 1000 * 60 * 60 * 24 * 7;

  beforeEach(() => {
    loadUrlByShortRepositorySpy = new LoadUrlByShortRepositorySpy();
    sut = new DbLoadUrl(loadUrlByShortRepositorySpy, expireTime);
  });

  it('deverá chamar o LoadUrlByShortRepository com os valores corretos', async () => {
    const request = makeFakeRequest();
    await sut.loadUrl(request);
    expect(loadUrlByShortRepositorySpy.params).toEqual({
      shortUrl: request.shortUrl,
    });
  });

  it('deverá retornar null caso a url encontrada tenha expirado', async () => {
    const pastOverExpireTimeDate = new Date();
    pastOverExpireTimeDate.setTime(
      pastOverExpireTimeDate.getTime() - expireTime - 1,
    );

    jest
      .spyOn(loadUrlByShortRepositorySpy, 'loadUrlByShort')
      .mockResolvedValueOnce({
        ...loadUrlByShortRepositorySpy.result,
        createdAt: pastOverExpireTimeDate,
      });
    const response = await sut.loadUrl(makeFakeRequest());
    expect(response).toBeUndefined();
  });

  it('deverá retonar um erro caso o LoadUrlByShortRepository retorne um erro', async () => {
    jest
      .spyOn(loadUrlByShortRepositorySpy, 'loadUrlByShort')
      .mockImplementationOnce(async () => {
        throw new Error();
      });

    await expect(sut.loadUrl(makeFakeRequest())).rejects.toThrow();
  });

  it('deverá retornar uma url caso tenha sucesso', async () => {
    const response = await sut.loadUrl(makeFakeRequest());
    expect(response).toEqual(loadUrlByShortRepositorySpy.result.url.url);
  });
});
