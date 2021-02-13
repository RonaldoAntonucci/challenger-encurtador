import { GenerateShortUrl } from '@/data/protocols';
import { AddShortUrlRepository } from '@/data/protocols/db/url/AddShortUrlRepository';
import { EncryptUrl } from '@/domain/usecases';

export class DbEncryptUrl implements EncryptUrl {
  constructor(
    private readonly generateShortUrl: GenerateShortUrl,
    private readonly addShortUrlRepository: AddShortUrlRepository,
  ) {}

  async encrypt({ url }: EncryptUrl.Params): Promise<EncryptUrl.Result> {
    const shortUrl = await this.generateShortUrl.generateUrl({ url });

    const newUrl = await this.addShortUrlRepository.addShortUrl({
      url,
      shortUrl,
    });

    return newUrl;
  }
}
