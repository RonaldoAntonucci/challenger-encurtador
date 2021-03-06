import { ShortUrl } from '@/infra/db/typeorm';

export interface LoadUrlByShortRepository {
  loadUrlByShort(
    params: LoadUrlByShortRepository.Params,
  ): Promise<LoadUrlByShortRepository.Result>;
}

export namespace LoadUrlByShortRepository {
  export type Params = {
    shortUrl: string;
  };

  export type Result = ShortUrl | undefined;
}
