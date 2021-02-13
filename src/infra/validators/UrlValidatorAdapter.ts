import { UrlValidator } from '@/validation/protocols/UrlValidator';

import validator from 'validator';

export class UrlValidatorAdapter implements UrlValidator {
  isValidUrl(url: string): boolean {
    return validator.isURL(url);
  }
}
