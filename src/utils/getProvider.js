const PROVIDERS = [
  {
    urlRegex: /youtube|youtu\.be/,
    label: 'youtube'
  },
  {
    urlRegex: /vimeo/,
    label: 'vimeo'
  }
];

/**
 * Parses video provider out of URL
 * @param  {String} url Video URL
 * @return {String}     Video provider
 */
export function getProvider(url) {
  let checkProvider = provider => provider.urlRegex.test(url),
      provider = PROVIDERS.find(checkProvider);

  return provider ? provider.label : null;
}