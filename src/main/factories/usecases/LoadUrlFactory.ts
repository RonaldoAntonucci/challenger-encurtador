import { DbLoadUrl } from '@/data/usecases';
import { LoadUrl } from '@/domain/usecases';
import { ShortUrlPgRepository } from '@/infra/db/typeorm';

export const makeLoadUrlFactory = (): LoadUrl => {
  const loadUrlByShortRepository = new ShortUrlPgRepository();
  const loadUrl = new DbLoadUrl(loadUrlByShortRepository);
  return loadUrl;
};
