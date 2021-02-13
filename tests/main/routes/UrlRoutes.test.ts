import { ShortUrl, TypeOrmHelper, Url } from '@/infra/db/typeorm';
import request from 'supertest';
import faker from 'faker';
import app from '@/main/config/app';
import { Connection } from 'typeorm';

describe('Url Routes', () => {
  let conn: Connection;
  beforeAll(async () => {
    await TypeOrmHelper.connect();
    conn = TypeOrmHelper.getClient();
  });

  afterAll(async () => {
    await TypeOrmHelper.disconnect();
  });

  beforeEach(async () => {
    await TypeOrmHelper.getClient().getRepository(ShortUrl).delete({});
    await TypeOrmHelper.getClient().getRepository(Url).delete({});
  });

  describe('POST /encurtador', () => {
    it('deverá retornar 200 no /encurtador', async () => {
      await request(app)
        .post('/encurtador')
        .send({
          url: faker.internet.url(),
        })
        .expect(200);
    });
  });

  describe('GET /', () => {
    it('deverá returna 302 no /', async () => {
      const response = await request(app).post('/encurtador').send({
        url: faker.internet.url(),
      });
      const { newUrl } = response.body;
      const urlSplit = String(newUrl).split('/');
      const url = urlSplit[urlSplit.length - 1];
      const res = await request(app).get(`/${url}`).expect(302);
      expect(res.redirect).toBeTruthy();
    });

    it('deverá returna 404 no / caso a shortUrl não exista', async () => {
      const res = await request(app).get(`/notExists`).expect(404);
      expect(res.redirect).toBeFalsy();
    });
  });
});
