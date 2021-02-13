import { AddShortUrlRepository } from '@/data/protocols';
import { ShortUrlPgRepository } from '@/infra/db/typeorm/repositories';

import faker from 'faker';
import { Connection, createConnection } from 'typeorm';
import { ShortUrl, Url } from '@/infra/db/typeorm/entities';

describe('ShortUrlPgRepository', () => {
  let sut: ShortUrlPgRepository;
  let conn: Connection;

  beforeEach(() => {
    sut = new ShortUrlPgRepository();
  });

  beforeAll(async () => {
    conn = await createConnection();
  });

  afterAll(async () => {
    await conn.close();
  });

  describe('AddShortUrlRepository', () => {
    beforeEach(async () => {
      await conn.getRepository(ShortUrl).delete({});
      await conn.getRepository(Url).delete({});
    });

    const makeFakeRequest = (): AddShortUrlRepository.Params => ({
      url: faker.internet.url(),
      shortUrl: faker.random.uuid(),
    });

    it('deverá criar uma url no db caso não exista', async () => {
      const urlRepo = conn.getRepository(Url);
      await sut.addShortUrl(makeFakeRequest());

      const count = await urlRepo.count();

      expect(count).toBe(1);
    });

    it('não deverá criar uma url caso ela já exista no banco de dados', async () => {
      const urlRepo = conn.getRepository(Url);
      const request = makeFakeRequest();
      const url = urlRepo.create({ url: request.url });
      await urlRepo.save(url);
      await sut.addShortUrl(request);

      const count = await urlRepo.count();

      expect(count).toBe(1);
    });

    it('deverá salvar a ShortUrl no db em caso de successo', async () => {
      const shortUrlRepo = conn.getRepository(ShortUrl);
      await sut.addShortUrl(makeFakeRequest());

      const count = await shortUrlRepo.count();

      expect(count).toBe(1);
    });

    it('deverá returna uma ShortUrl em caso de successo', async () => {
      const request = makeFakeRequest();
      const response = await sut.addShortUrl(request);
      expect(response).toEqual(request.shortUrl);
    });
  });
});
