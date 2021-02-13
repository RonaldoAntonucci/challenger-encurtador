export interface EncrypterUrl {
  encrypt(params: EncrypterUrl.Params): Promise<EncrypterUrl.Result>;
}

export namespace EncrypterUrl {
  export type Params = {
    url: string;
  };

  export type Result = string;
}
