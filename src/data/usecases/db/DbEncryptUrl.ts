import { GenerateShortUrl } from '@/data/protocols';
import { EncryptUrl } from '@/domain/usecases';

export class DbEncryptUrl implements EncryptUrl {
  constructor(private readonly generateShortUrl: GenerateShortUrl) {}

  async encrypt({ url }: EncryptUrl.Params): Promise<EncryptUrl.Result> {
    await this.generateShortUrl.generate({ url });

    const result = {};

    return result as GenerateShortUrl.Result;
  }
}
