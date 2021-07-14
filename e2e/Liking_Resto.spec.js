const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
  I.see('Resto Favoritemu masih kosong.', '#fav-empty');
});

Scenario('Add Restaurant to Favorite restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.item');
  const firstRestaurantName = await I.grabTextFrom(
    locate('.item .item-title').first(),
  );
  // click route to detail
  I.click(locate('.item .item-title').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // on route favorite page
  I.amOnPage('/#/favorite');
  I.seeElement('.item');
  const favoriteRestaurantName = await I.grabTextFrom('.item .item-title');
  assert.strictEqual(firstRestaurantName, favoriteRestaurantName);
});

Scenario('Remove Restaurant from Favorite restaurant', ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.item');
  I.click(locate('.item .item-title').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.item');
  I.click('.item .item-title');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.item');
});
