import { ValidationMiddleware } from '@/presentation/middlewares';
import { ValidationSpy } from '@/tests/util';
import { badRequest, serverError, success } from '@/presentation/helper';

const makeRequest = (): ValidationMiddleware.Request => ({
  body: {},
});

describe('Auth Middleware', () => {
  let sut: ValidationMiddleware;
  let validationSpy: ValidationSpy;

  beforeEach(() => {
    validationSpy = new ValidationSpy();
    sut = new ValidationMiddleware(validationSpy);
  });

  it('deverá retornar uma badRequest caso a validação falhe', async () => {
    const error = new Error();
    jest.spyOn(validationSpy, 'validate').mockReturnValueOnce(error);
    const httpResponse = await sut.handle(makeRequest());
    expect(httpResponse).toEqual(badRequest(error));
  });

  it('deverá retornar um serverError caso ocorre um erro na validação', async () => {
    const error = new Error();
    jest.spyOn(validationSpy, 'validate').mockImplementationOnce(() => {
      throw error;
    });
    const httpResponse = await sut.handle(makeRequest());
    expect(httpResponse).toEqual(serverError(error));
  });

  it('deverá retornar success caso não ocorra um erro de validação', async () => {
    const httpResponse = await sut.handle(makeRequest());
    expect(httpResponse).toEqual(success({}));
  });
});
