import { AddShortUrlRepository } from '@/data/protocols';
import { getConnection } from 'typeorm';
import { ShortUrl } from '../entities/ShortUrl';
import { Url } from '../entities/Url';

export class ShortUrlPgRepository implements AddShortUrlRepository {
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
}
