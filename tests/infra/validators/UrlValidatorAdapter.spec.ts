import { UrlValidatorAdapter } from '@/infra/validators';

import validator from 'validator';

jest.mock('validator', () => ({
  isURL(): boolean {
    return true;
  },
}));

const makeSut = (): UrlValidatorAdapter => new UrlValidatorAdapter();

describe('UrlValidatorAdapter', () => {
  test('Should return false if validator returns false', () => {
    const sut = makeSut();
    jest.spyOn(validator, 'isURL').mockReturnValueOnce(false);
    const isValidUrl = sut.isValidUrl('invalid_url');
    expect(isValidUrl).toBe(false);
  });

  test('Should return true if validator returns true', () => {
    const sut = makeSut();
    const isValidUrl = sut.isValidUrl('valid_url');
    expect(isValidUrl).toBe(true);
  });

  test('Should call validator with correct email', () => {
    const sut = makeSut();
    const isURLSpy = jest.spyOn(validator, 'isURL');
    sut.isValidUrl('any_url');
    expect(isURLSpy).toHaveBeenCalledWith('any_url');
  });
});
