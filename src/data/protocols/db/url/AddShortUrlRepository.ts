export interface AddShortUrlRepository {
  addShortUrl(
    params: AddShortUrlRepository.Params,
  ): Promise<AddShortUrlRepository.Result>;
}

export namespace AddShortUrlRepository {
  export type Params = {
    url: string;
    shortUrl: string;
  };

  export type Result = string;
}
