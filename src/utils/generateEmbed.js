const URLS = {
        youtube: 'https://www.youtube.com/embed/',
        vimeo: 'https://player.vimeo.com/video/'
      },
      QUERY_PARAMS = {
        youtube: '?rel=0&showinfo=0',
        vimeo: '?title=0&byline=0'
      };

/**
 * Generates embed URL from video ID and provider
 * @param  {String} id       Video ID
 * @param  {String} provider Provider (youtube | vimeo)
 * @return {String}          Embed URL for iframes
 */
export function generateEmbed(id, provider) {
  return URLS[provider] + id + QUERY_PARAMS[provider];
}