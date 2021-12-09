Feature('Liking Restaurant');

Scenario('Like and Unlike a restaurant Melting Pot', ({ I }) => {
  // Like a restaurant routes
  I.amOnPage('/')
    // Check all element
  I.seeElement('.navbar');
  I.seeElement('.hero-image');
  I.seeElement('#mainContent');
  I.seeElement('.footer');

  // Go to #restaurantElement
  I.seeElement('#restaurantList');
  I.seeElement('.restaurant-item');

  // Check Image
  I.seeElement('.image');
  I.see('Kota Medan', 'p.tag');
  locate('.image img').withAttr({ src: 'https://restaurant-api.dicoding.dev/images/large/14' });
  locate('.image img').withAttr({ alt: "Image of Melting Pot" });

  // Check Content
  I.seeElement('.content');
  I.see('Melting Pot', '.header');
  I.click('Melting Pot', '.header');

  // Detail Page
  I.seeElement('#likeButtonContainer');
  locate('#likeButton').withAttr({ "aria-label": 'like this restaurant' });
  I.click('#likeButton');
  locate('#likeButton').withAttr({ "aria-label": 'unlike this restaurant' });

  // Unlike restaurant routes
  // Goto Favorite page
  I.amOnPage('/#/favorite');
  I.see('Melting Pot', '.header');
  I.click('Melting Pot', '.header');

  // Detail Page
  I.seeElement('#likeButtonContainer');
  locate('#likeButton').withAttr({ "aria-label": 'unlike this restaurant' });
  I.click('#likeButton');
  locate('#likeButton').withAttr({ "aria-label": 'like this restaurant' });

  // To check favorite page
  I.amOnPage('/#/favorite');
  I.dontSee('Melting Pot');
  pause();
});
