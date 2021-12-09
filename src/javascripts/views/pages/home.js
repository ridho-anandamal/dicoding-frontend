import Restaurant from '../../data/restaurant-api';
import createRestaurantItem from '../generator/template-home';

const Home = {
  async render() {
    return `
      <div class="restaurant" id="restaurant">
        <div class="restaurant-header" tabindex="0">
          <h2>Daftar Restaurant Kami</h2>
          <p>Berikut beberapa cabang restorant kami yang ada di Indonesia</p>
        </div>
        <div class="restaurant-list" id="restaurantList">
          <!-- Render Restaurant -->
        </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurantList = await Restaurant.listRestaurant();
    const restaurantContainer = document.querySelector('#restaurantList');

    restaurantList.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItem(restaurant);
    });
  },
};

export default Home;
