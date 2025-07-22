import axios from 'axios';

export async function getImagesByQuery(query, page, perPage) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '51377392-58695daed08c65a7357b6e761',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: perPage,
      page: page,
    },
  });

  return response.data;
}
