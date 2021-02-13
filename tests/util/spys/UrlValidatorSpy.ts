import { UrlValidator } from '@/validation/protocols';

export class UrlValidatorSpy implements UrlValidator {
  isUrlValid = true;

  url: string;

  isValidUrl(url: string): boolean {
    this.url = url;
    return this.isUrlValid;
  }
}
