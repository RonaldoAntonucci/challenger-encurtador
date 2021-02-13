import { Validation } from '@/presentation/protocols';
import {
  RequiredFieldValidation,
  ValidationComposite,
} from '@/validation/validators';

export const makeEncryptUrlValidator = (): ValidationComposite => {
  const validations: Validation[] = [];
  validations.push(new RequiredFieldValidation('url'));
  return new ValidationComposite(validations);
};
