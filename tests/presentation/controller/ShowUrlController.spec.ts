import faker from 'faker';
import { ShowUrlController } from '@/presentation/controllers';
import { LoadUrlSpy } from '@/tests/util/spys/LoadUrlSpy';
import { notFound, redirect } from '@/presentation/helper';

const makeFakeRequest = (): ShowUrlController.Request => ({
  shortUrl: faker.random.uuid(),
});

describe('ShowUrlController', () => {
  let sut: ShowUrlController;
  let loadUrlSpy: LoadUrlSpy;

  beforeEach(() => {
    loadUrlSpy = new LoadUrlSpy();
    sut = new ShowUrlController(loadUrlSpy);
  });

  it('deverá chamar o loadUrl com os valores corretos', async () => {
    const request = makeFakeRequest();
    await sut.handle(request);
    expect(loadUrlSpy.params).toEqual({ shortUrl: request.shortUrl });
  });

  it('deverá disparar um erro caso o LoadUrl dispare um erro', async () => {
    jest.spyOn(loadUrlSpy, 'loadUrl').mockImplementationOnce(async () => {
      throw new Error();
    });
    await expect(sut.handle(makeFakeRequest())).rejects.toThrow();
  });

  it('deverá retornar notFound caso a url não exista', async () => {
    jest.spyOn(loadUrlSpy, 'loadUrl').mockReturnValueOnce(undefined);
    const response = await sut.handle(makeFakeRequest());
    expect(response).toEqual(notFound());
  });

  it('deverá retornar a url caso o loadUrl tenha successo', async () => {
    const response = await sut.handle(makeFakeRequest());
    expect(response).toEqual(redirect(loadUrlSpy.result));
  });
});
