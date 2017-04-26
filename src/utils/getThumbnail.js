const YOUTUBE_URL = 'https://img.youtube.com/vi/',
      VIMEO_ENDPOINT = 'https://vimeo.com/api/v2/video/'

/**
 * Fetches thumbnail for a given video
 * @param  {String} id       Video ID
 * @param  {String} provider Video provider
 * @return {String}          Thumbnail src
 */
export function getThumbnail(id, provider) {
  return new Promise(resolve => {
    switch(provider) {

    case 'youtube':
      resolve(`${YOUTUBE_URL}${id}/hqdefault.jpg`);
      break;

    case 'vimeo':
      fetch(`${VIMEO_ENDPOINT}${id}.json`)
        .then(response => response.json())
        .then(data => resolve(data[0].thumbnail_large));
      break;
    default:
      resolve(false);
    }
  })
}