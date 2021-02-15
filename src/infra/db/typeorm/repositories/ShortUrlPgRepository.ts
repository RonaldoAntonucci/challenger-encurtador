import {
  AddShortUrlRepository,
  LoadUrlByShortRepository,
} from '@/data/protocols';
import { getConnection } from 'typeorm';
import { ShortUrl } from '../entities/ShortUrl';
import { Url } from '../entities/Url';

export class ShortUrlPgRepository
  implements AddShortUrlRepository, LoadUrlByShortRepository {
  async addShortUrl({
    url: urlData,
    shortUrl: shortUrlData,
  }: AddShortUrlRepository.Params): Promise<AddShortUrlRepository.Result> {
    const con = getConnection();

    return con.transaction(async (transaction) => {
      const urlRepo = transaction.getRepository(Url);
      const shortUrlRepo = transaction.getRepository(ShortUrl);

      let url = await urlRepo.findOne({ url: urlData });
      if (!url) {
        url = urlRepo.create({ url: urlData });
        await urlRepo.save(url);
      }

      const shortUrl = shortUrlRepo.create({ url, shortUrl: shortUrlData });
      await shortUrlRepo.save(shortUrl);

      return shortUrl.shortUrl;
    });
  }

  async loadUrlByShort({
    shortUrl,
  }: LoadUrlByShortRepository.Params): Promise<LoadUrlByShortRepository.Result> {
    const conn = getConnection();
    const shortUrlRepo = conn.getRepository(ShortUrl);

    const short = await shortUrlRepo.findOne(
      { shortUrl },
      { relations: ['url'] },
    );
    if (!short) {
      return undefined;
    }

    return short;
  }
}
