import { DbEncryptUrl } from '@/data/usecases';
import { GenerateShortUrlSpy } from '@/tests/util';
import { EncryptUrl } from '@/domain/usecases';

import faker from 'faker';
import { AddShortUrlRepositorySpy } from '@/tests/util/spys/AddShortUrlRepositorySpy';

const makeFakeRequest = (): EncryptUrl.Params => ({
  url: faker.internet.url(),
});

describe('DbEncryptUrl - unit', () => {
  let sut: DbEncryptUrl;
  let generateShortUrlSpy: GenerateShortUrlSpy;
  let addShortUrlRepositorySpy: AddShortUrlRepositorySpy;

  beforeEach(() => {
    generateShortUrlSpy = new GenerateShortUrlSpy();
    addShortUrlRepositorySpy = new AddShortUrlRepositorySpy();
    sut = new DbEncryptUrl(generateShortUrlSpy, addShortUrlRepositorySpy);
  });

  it('deverá chamar o EncrypterUrl com a url correta', async () => {
    const request = makeFakeRequest();
    await sut.encrypt(request);
    expect(generateShortUrlSpy.params).toEqual({ url: request.url });
  });

  it('deverá retonar um erro caso o EncrypterUrl retorne um erro', async () => {
    jest
      .spyOn(generateShortUrlSpy, 'generateUrl')
      .mockImplementationOnce(async () => {
        throw new Error();
      });

    await expect(sut.encrypt(makeFakeRequest())).rejects.toThrow();
  });

  it('deverá chamar o addShortUrlRepository com os valores corretos', async () => {
    const request = makeFakeRequest();
    await sut.encrypt(request);
    expect(addShortUrlRepositorySpy.params).toEqual({
      url: request.url,
      shortUrl: generateShortUrlSpy.result,
    });
  });

  it('deverá retonar um erro caso o addShortUrlRepository retorne um erro', async () => {
    jest
      .spyOn(addShortUrlRepositorySpy, 'addShortUrl')
      .mockImplementationOnce(async () => {
        throw new Error();
      });

    await expect(sut.encrypt(makeFakeRequest())).rejects.toThrow();
  });

  it('deverá retornar uma newUrl caso tenha successo', async () => {
    const response = await sut.encrypt(makeFakeRequest());
    expect(response).toEqual(addShortUrlRepositorySpy.result);
  });
});
