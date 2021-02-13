import { ShortUrl, TypeOrmHelper, Url } from '@/infra/db/typeorm';
import request from 'supertest';
import faker from 'faker';
import app from '@/main/config/app';

describe('Url Routes', () => {
  beforeAll(async () => {
    await TypeOrmHelper.connect();
  });

  afterAll(async () => {
    await TypeOrmHelper.disconnect();
  });

  beforeEach(async () => {
    await TypeOrmHelper.getClient().getRepository(ShortUrl).delete({});
    await TypeOrmHelper.getClient().getRepository(Url).delete({});
  });

  describe('POST /encurtador', () => {
    it('deverá returna 200 no /encurtador', async () => {
      await request(app)
        .post('/encurtador')
        .send({
          url: faker.internet.url(),
        })
        .expect(200);
    });
  });
});
