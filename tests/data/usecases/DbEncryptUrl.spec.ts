import { DbEncryptUrl } from '@/data/usecases';
import { EncryptUrlSpy, GenerateShortUrlSpy } from '@/tests/util';
import { EncryptUrl } from '@/domain/usecases';

import faker from 'faker';

const makeFakeRequest = (): EncryptUrl.Params => ({
  url: faker.internet.url(),
});

describe('DbEncryptUrl - unit', () => {
  let sut: DbEncryptUrl;
  let generateShortUrlSpy: GenerateShortUrlSpy;

  beforeEach(() => {
    generateShortUrlSpy = new GenerateShortUrlSpy();
    sut = new DbEncryptUrl(generateShortUrlSpy);
  });

  it('deverá chamar o EncrypterUrl com a url correta', async () => {
    const request = makeFakeRequest();
    await sut.encrypt(request);
    expect(generateShortUrlSpy.params).toEqual({ url: request.url });
  });

  it('deverá retonar um erro caso o EncrypterUrl retorne um erro', async () => {
    jest
      .spyOn(generateShortUrlSpy, 'generate')
      .mockImplementationOnce(async () => {
        throw new Error();
      });

    await expect(sut.encrypt(makeFakeRequest())).rejects.toThrow();
  });
});
