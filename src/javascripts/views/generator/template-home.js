import API_ENDPOINT from '../../global/api-endpoint';

const createRestaurantItem = (restaurant) => `
  <div class="restaurant-item">
    <div class="image">
      <p class="tag">Kota ${restaurant.city}</p>
      <img src="${API_ENDPOINT.IMAGE_URL}${restaurant.pictureId}" alt="Image of ${restaurant.name}">
    </div>
    <div class="content">
      <h3 class="header"><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p class="sub-header">Rating <span>★ ${restaurant.rating}</span></p>
      <p class="body">${restaurant.description.substring(0, 200)}... <a href="#/detail/${restaurant.id}">Lihat Selengkapnya</a></p>
    </div>
  </div>
`;

export default createRestaurantItem;
