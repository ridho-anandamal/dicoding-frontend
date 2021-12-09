import FavoriteRestaurantIdb from '../../data/favorite-db';
import createRestaurantItem from '../generator/template-home';

const Favorite = {
  async render() {
    return `
      <div class="restaurant" id="restaurant">
        <div class="restaurant-header" tabindex="0">
          <h2>Restaurant Favorit</h2>
          <p>Berikut beberapa cabang restorant kami yang ada di Indonesia</p>
        </div>
        <div class="restaurant-list" id="restaurantList">
          <!-- Render Restaurant -->
        </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurantList = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#restaurantList');

    restaurantList.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItem(restaurant);
    });
  },
};

export default Favorite;
