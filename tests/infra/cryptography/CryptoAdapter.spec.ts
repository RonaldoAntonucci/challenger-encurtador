import { CryptoAdapter } from '@/infra/cryptography';

describe('CryptoAdapter -- unit', () => {
  let sut: CryptoAdapter;

  beforeEach(() => {
    sut = new CryptoAdapter();
  });

  it('deverá retornar uma string com o tamanho entre 5 e 10 caracteres', async () => {
    const promises = [];
    for (let i = 1000; i > 0; i -= 1) {
      promises.push(sut.generateUrl());
    }

    const result = await Promise.all(promises);

    result.forEach((response) => {
      expect(response.length).toBeGreaterThanOrEqual(5);
      expect(response.length).toBeLessThanOrEqual(10);
    });
  });
});
