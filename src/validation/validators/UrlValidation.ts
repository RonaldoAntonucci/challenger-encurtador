import { InvalidParamError } from '@/presentation/errors';
import { Validation } from '@/presentation/protocols';
import { UrlValidator } from '../protocols/UrlValidator';

export class UrlValidation implements Validation {
  constructor(
    private readonly fieldName: string,
    private readonly urlValidator: UrlValidator,
  ) {}

  validate(input: any): Error | void {
    const isValidUrl = this.urlValidator.isValidUrl(input[this.fieldName]);
    if (!isValidUrl) {
      return new InvalidParamError(this.fieldName);
    }
    return null;
  }
}
