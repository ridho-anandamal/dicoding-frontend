import CONFIG from './config';

const API_ENDPOINT = {
  LIST_RESTAURANT: `${CONFIG.BASE_URL}/list`,
  DETAIL_RESTAURANT: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  IMAGE_URL_LARGE: `${CONFIG.BASE_URL}/images/large/`,
  IMAGE_URL_MEDIUM: `${CONFIG.BASE_URL}/images/medium/`,
  IMAGE_URL_SMALL: `${CONFIG.BASE_URL}/images/small/`,
};

export default API_ENDPOINT;
