import { CryptoAdapter } from '@/infra/cryptography';

describe('CryptoAdapter -- unit', () => {
  let sut: CryptoAdapter;

  beforeEach(() => {
    sut = new CryptoAdapter();
  });

  it('deverá retornar uma string com o tamanho entre 5 e 10 caracteres e contendo somente letras ou números', async () => {
    const promises = [];
    for (let i = 1000; i > 0; i -= 1) {
      promises.push(sut.generateUrl());
    }

    const result = await Promise.all(promises);
    const letttersAndNumber = /^[0-9a-zA-Z]+$/;

    result.forEach((response) => {
      expect(response.length).toBeGreaterThanOrEqual(5);
      expect(response.length).toBeLessThanOrEqual(10);
      expect(letttersAndNumber.test(response)).toBeTruthy();
    });
  });
});
