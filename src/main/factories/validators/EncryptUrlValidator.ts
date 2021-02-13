import { UrlValidatorAdapter } from '@/infra/validators';
import { Validation } from '@/presentation/protocols';
import {
  RequiredFieldValidation,
  ValidationComposite,
  UrlValidation,
} from '@/validation/validators';

export const makeEncryptUrlValidator = (): ValidationComposite => {
  const validations: Validation[] = [];
  validations.push(new RequiredFieldValidation('url'));
  validations.push(new UrlValidation('url', new UrlValidatorAdapter()));
  return new ValidationComposite(validations);
};
