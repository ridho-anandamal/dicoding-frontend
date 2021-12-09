import API_ENDPOINT from '../../global/api-endpoint';

const createRestaurantItem = (restaurant) => `
  <div class="restaurant-item">
    <div class="image">
      <p class="tag">Kota ${restaurant.city}</p>
      <picture>
        <source media="(max-width: 450px)" data-srcset="${API_ENDPOINT.IMAGE_URL_SMALL}${restaurant.pictureId}" type="image/jpeg">
        <source media="(max-width: 1400px)" data-srcset="${API_ENDPOINT.IMAGE_URL_MEDIUM}${restaurant.pictureId}" type="image/jpeg">
        <img class="lazyload" data-src="${API_ENDPOINT.IMAGE_URL_LARGE}${restaurant.pictureId}" alt="Image of ${restaurant.name}">
      </picture>
    </div>
    <div class="content">
      <h3 class="header"><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p class="sub-header">Rating <span>★ ${restaurant.rating}</span></p>
      <p class="body">${restaurant.description.substring(0, 200)}... <a href="#/detail/${restaurant.id}">Lihat Selengkapnya</a></p>
    </div>
  </div>
`;

export default createRestaurantItem;
