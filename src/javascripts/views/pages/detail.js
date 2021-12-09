import Restaurant from '../../data/restaurant-api';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utilities/like-button';
import createRestaurantDetail from '../generator/template-detail';

const Detail = {
  async render() {
    return `
      <div class="restaurant" id="restaurant">
        <div class="restaurant-header" tabindex="0">
          <h2>Detail Restaurant</h2>
        </div>
        <div class="restaurant-detail" id="restaurantDetail">
          <!-- Render Restaurant -->
        </div>
    </div>
    <div id="likeButtonContainer"> </div>
    `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetail = await Restaurant.detailRestaurant(url.id);
    const DetailContainer = document.querySelector('#restaurantDetail');
    DetailContainer.innerHTML = createRestaurantDetail(restaurantDetail);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: restaurantDetail,
    });
  },
};

export default Detail;
