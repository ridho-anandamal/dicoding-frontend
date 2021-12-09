import CONFIG from './config';

const API_ENDPOINT = {
  LIST_RESTAURANT: `${CONFIG.BASE_URL}/list`,
  DETAIL_RESTAURANT: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  IMAGE_URL: `${CONFIG.BASE_URL}/images/large/`,
};

export default API_ENDPOINT;
