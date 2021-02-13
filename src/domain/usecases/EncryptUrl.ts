export interface EncryptUrl {
  encrypt(params: EncryptUrl.Params): Promise<EncryptUrl.Result>;
}

export namespace EncryptUrl {
  export type Params = {
    url: string;
  };

  export type Result = string;
}
