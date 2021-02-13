import { UrlValidation } from '@/validation/validators';
import { InvalidParamError } from '@/presentation/errors';
import { UrlValidatorSpy } from '@/tests/util/spys/UrlValidatorSpy';

import faker from 'faker';

const field = faker.random.word();

type SutTypes = {
  sut: UrlValidation;
  urlValidatorSpy: UrlValidatorSpy;
};

const makeSut = (): SutTypes => {
  const urlValidatorSpy = new UrlValidatorSpy();
  const sut = new UrlValidation(field, urlValidatorSpy);
  return {
    sut,
    urlValidatorSpy,
  };
};

describe('Url Validation', () => {
  test('Should return an error if UrlValidator returns false', () => {
    const { sut, urlValidatorSpy } = makeSut();
    urlValidatorSpy.isUrlValid = false;
    const url = faker.internet.url();
    const error = sut.validate({ [field]: url });
    expect(error).toEqual(new InvalidParamError(field));
  });

  test('Should call UrlValidator with correct url', () => {
    const { sut, urlValidatorSpy } = makeSut();
    const url = faker.internet.url();
    sut.validate({ [field]: url });
    expect(urlValidatorSpy.url).toBe(url);
  });

  test('Should throw if UrlValidator throws', () => {
    const { sut, urlValidatorSpy } = makeSut();
    jest.spyOn(urlValidatorSpy, 'isValidUrl').mockImplementationOnce(() => {
      throw new Error();
    });
    expect(sut.validate).toThrow();
  });
});
