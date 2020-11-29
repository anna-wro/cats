function setQueryParam(key: string, value: string, url: string) {
  let parsedUrl = new URL(url);
  parsedUrl.searchParams.set(key, value);

  return parsedUrl.toString();
}

export function setMultipleParams(params, url) {
  let urlWithParams = url;

  Object.entries(params).forEach(([key, value]) => {
    //   FIXME ts: Argument of type 'unknown' is not assignable to parameter of type 'string'
    urlWithParams = setQueryParam(key, value, urlWithParams);
  });

  return urlWithParams;
}
