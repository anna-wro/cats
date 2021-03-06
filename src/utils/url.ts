function setQueryParam(key: string, value: string, url: string) {
  const parsedUrl = new URL(url);
  parsedUrl.searchParams.set(key, value);

  return parsedUrl.toString();
}

export function setMultipleParams(params, url) {
  let urlWithParams = url;

  Object.entries(params).forEach(
    ([key, value]) =>
      (urlWithParams = setQueryParam(key, '' + value, urlWithParams)),
  );

  return urlWithParams;
}
