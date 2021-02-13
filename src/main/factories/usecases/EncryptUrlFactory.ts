import { DbEncryptUrl } from '@/data/usecases';
import { EncryptUrl } from '@/domain/usecases';
import { CryptoAdapter } from '@/infra/cryptography';
import { ShortUrlPgRepository } from '@/infra/db/typeorm';

export const makeEncryptUrlFactory = (): EncryptUrl => {
  const generateShortUrl = new CryptoAdapter();
  const addShortUrlRepository = new ShortUrlPgRepository();
  const encryptUrl = new DbEncryptUrl(generateShortUrl, addShortUrlRepository);
  return encryptUrl;
};
