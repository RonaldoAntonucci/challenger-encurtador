import { LoadUrlByShortRepository } from '@/data/protocols';
import { LoadUrl } from '@/domain/usecases';

export class DbLoadUrl implements LoadUrl {
  constructor(
    private readonly loadUrlByShortRepository: LoadUrlByShortRepository,
  ) {}

  async loadUrl({ shortUrl }: LoadUrl.Params): Promise<LoadUrl.Result> {
    const result = this.loadUrlByShortRepository.loadUrlByShort({ shortUrl });

    return result;
  }
}
