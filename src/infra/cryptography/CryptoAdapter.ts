/* eslint-disable class-methods-use-this */
import { GenerateShortUrl } from '@/data/protocols';
import crypto from 'crypto';

export class CryptoAdapter implements GenerateShortUrl {
  async generateUrl(): Promise<GenerateShortUrl.Result> {
    const randomBetween5and10 = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    const url = crypto.randomBytes(randomBetween5and10).toString('hex');

    return encodeURIComponent(url).substring(url.length / 2);
  }
}
