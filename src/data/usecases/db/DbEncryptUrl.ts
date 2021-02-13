import { EncrypterUrl } from '@/data/protocols';
import { EncryptUrl } from '@/domain/usecases';

export class DbEncryptUrl implements EncryptUrl {
  constructor(private readonly encrypterUrl: EncrypterUrl) {}

  async encrypt({ url }: EncryptUrl.Params): Promise<EncryptUrl.Result> {
    await this.encrypterUrl.encrypt({ url });
  }
}
