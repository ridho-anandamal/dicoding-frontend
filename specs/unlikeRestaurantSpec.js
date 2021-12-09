import FavoriteRestaurantIdb from "../src/javascripts/data/favorite-db";
import LikeButtonInitiator from "../src/javascripts/utilities/like-button";

const addlikeButtonContainer = () => {
  document.body.innerHTML = `<div id="likeButtonContainer"></div>`;
};

describe('Unliking a restaurant', () => {
  beforeEach(async() => {
    addlikeButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  })

  afterEach(async() => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('Should display unlike widget when the restaurant has been liked', async() => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1
      },
    });

    expect(document.querySelector('[aria-label= "unlike this restaurant"]')).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async() => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
  });

  it('Should be able to remove liked restaurant from the list', async() => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });

  it('Should no throw error if the unliked restaurant is not in the list', async() => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    await FavoriteRestaurantIdb.deleteRestaurant(1);

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });
});
