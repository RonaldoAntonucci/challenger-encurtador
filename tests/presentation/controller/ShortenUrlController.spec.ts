import { ShortenUrlController } from '@/presentation/controllers';
import { EncryptUrlSpy } from '@/tests/util/spys/EncryptUrlSpy';
import faker from 'faker';

const makeFakeRequest = (): ShortenUrlController.Request => ({
  url: faker.internet.url(),
});

describe('ShortenUrlController - unit', () => {
  let sut: ShortenUrlController;
  let encryptUrlSpy: EncryptUrlSpy;

  beforeEach(() => {
    encryptUrlSpy = new EncryptUrlSpy();
    sut = new ShortenUrlController(encryptUrlSpy);
  });

  it('deverá chamar o EncryptUrl com os valores corretos', async () => {
    const request = makeFakeRequest();
    await sut.handle(request);
    expect(encryptUrlSpy.params).toEqual({ url: request.url });
  });
});
