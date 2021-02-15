import { LoadUrlByShortRepository } from '@/data/protocols';
import { LoadUrl } from '@/domain/usecases';

export class DbLoadUrl implements LoadUrl {
  constructor(
    private readonly loadUrlByShortRepository: LoadUrlByShortRepository,
    private readonly expireTime: number,
  ) {}

  async loadUrl({ shortUrl }: LoadUrl.Params): Promise<LoadUrl.Result> {
    const result = await this.loadUrlByShortRepository.loadUrlByShort({
      shortUrl,
    });

    if (!result) {
      return undefined;
    }

    const expiredDate = result.createdAt;
    expiredDate.setTime(expiredDate.getTime() + this.expireTime);

    if (expiredDate.getTime() < new Date().getTime()) {
      return undefined;
    }

    return result.url.url;
  }
}
