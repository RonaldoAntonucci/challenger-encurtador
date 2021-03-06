export interface GenerateShortUrl {
  generateUrl(
    params?: GenerateShortUrl.Params,
  ): Promise<GenerateShortUrl.Result>;
}

export namespace GenerateShortUrl {
  export type Params = {
    url: string;
  };

  export type Result = string;
}
