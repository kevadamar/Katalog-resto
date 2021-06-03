import CONFIG from './config';

const API_ENDPOINT = {
  DETAIL: (id) => `${CONFIG.BASE_URL}movie/${id}?api_key=${CONFIG.KEY}`,
  LIST: `${CONFIG.BASE_URL}list`,
  DETAIL_RESTAURANT: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  SEARCH_RESTAURANT: (param) => `${CONFIG.BASE_URL}search?q=${param}`,
  ADD_CUSTOMER_REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
