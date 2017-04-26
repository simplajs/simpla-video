const PROVIDERS = [
  {
    provider: 'vimeo',
    regex: /https?:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/,
    matchGroup: 2
  },
  {
    provider: 'youtube',
    regex: /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,
    matchGroup: 7
  }
];

/**
 * Parses video ID out of URL
 * @param  {String} url      Video URL to parse
 * @param  {String} provider Provider to parse for
 * @return {String}          Video ID
 */
export function getId(url, provider) {
  let providerRegex = PROVIDERS.find(item => item.provider === provider),
      id;

  if (providerRegex) {
    id = url.match(providerRegex.regex)[providerRegex.matchGroup];
  }

  return id || null;
}