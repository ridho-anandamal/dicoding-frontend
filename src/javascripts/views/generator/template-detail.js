import API_ENDPOINT from '../../global/api-endpoint';

const createRestaurantDetail = (restaurant) => `
  <div class="image">
    <img src="${API_ENDPOINT.IMAGE_URL}${restaurant.pictureId}" alt="Image">
    </div>
    <div class="head">
    <h2>${restaurant.name}</h2>
    <div class="flex-row">
        <p class="sub-header"><span>Alamat Restaurant:</span>${restaurant.address}, Kota ${restaurant.city}</p>
        <p class="body">Rating: ★ ${restaurant.rating}</p>
    </div>
    </div>
    <div class="divider"></div>
    <div class="body">
    <h3>Deskripsi Restaurant</h3>
    <p>${restaurant.description}</p>
    <div class="categories">
        <h4>Kategori Restaurant</h4>
        <p id="categoryList">${restaurant.categories.map((category) => `<span>${category.name}</span>`).join(' ')}</p>
    </div>
    <div class="menus">
        <h4>Daftar Menu</h4>
        <div class="list-menus">
            <div class="foods">
                <h5>Makanan</h5>
                <div class="list-food">
                ${restaurant.menus.foods.map((food) => `<p> ${food.name} </p>`).join(' ')}
                </div>
            </div>
            <div class="drinks">
                <h5>Minuman</h5>
                <div class="list-drink">
                ${restaurant.menus.drinks.map((drink) => `<p> ${drink.name} </p>`).join(' ')}
                </div>
            </div>
        </div>
    </div>
    <div class="divider"></div>
    <div class="review">
      <h4>Review</h4>
      ${restaurant.customerReviews.map((customer) => `
        <div class="review-item">
          <div class="profile">
              <div class="image-profile"></div>
              <p class="name">${customer.name} <span>Tanggal ${customer.date}</span></p>
          </div>
          <p class="review-text">${customer.review}</p>
        </div>`).join(' ')}
    </div>
  </div>
  <div id="likeButtonContainer"> </div>
`;

export default createRestaurantDetail;
