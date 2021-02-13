import { DbEncryptUrl } from '@/data/usecases';
import { EncrypterUrlSpy } from '@/tests/util/spys/EncrypterUrlSpy';
import { EncryptUrl } from '@/domain/usecases';

import faker from 'faker';

const makeFakeRequest = (): EncryptUrl.Params => ({
  url: faker.internet.url(),
});

describe('DbEncryptUrl - unit', () => {
  let sut: DbEncryptUrl;
  let encrypterUrlSpy: EncrypterUrlSpy;

  beforeEach(() => {
    encrypterUrlSpy = new EncrypterUrlSpy();
    sut = new DbEncryptUrl(encrypterUrlSpy);
  });

  it('deverá chamar o EncrypterUrl com a url correta', async () => {
    const request = makeFakeRequest();
    await sut.encrypt(request);
    expect(encrypterUrlSpy.params).toEqual({ url: request.url });
  });

  it('deverá retonar um erro caso o EncrypterUrl retorne um erro', async () => {
    jest.spyOn(encrypterUrlSpy, 'encrypt').mockImplementationOnce(async () => {
      throw new Error();
    });

    await expect(sut.encrypt(makeFakeRequest())).rejects.toThrow();
  });
});
