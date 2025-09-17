import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '48897506-490b457e94f36b4c176b81d54';
axios.defaults.baseURL = BASE_URL;

export function getImagesByQuery(q) {
  const params = {
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get('', { params }).then(response => response.data);
}
