import FavoriteRestaurantIdb from '../src/scripts/data/idb-database';
import { createLikeButtonPresenterWithResto } from './helpers/testFactories';

const {
  putRestaurant, deleteRestaurant,
} = FavoriteRestaurantIdb;

describe('Unliking Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML += '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
    putRestaurant({ id: 'rqdv5juczeskfw1e867' });
  });

  afterEach(async () => {
    await deleteRestaurant('rqdv5juczeskfw1e867');
  });

  it('should show the unlike resto button when the resto already like to favorite', async () => {
    await createLikeButtonPresenterWithResto({ id: 'rqdv5juczeskfw1e867' });
    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeTruthy();
  });

  it('should not show the Favorite resto button when the resto already like to favorite', async () => {
    await createLikeButtonPresenterWithResto({ id: 'rqdv5juczeskfw1e867' });
    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeFalsy();
  });

  it('should able to unlike resto from favorite resto', async () => {
    await createLikeButtonPresenterWithResto({ id: 'rqdv5juczeskfw1e867' });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const allFavoriteRestaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    expect(allFavoriteRestaurant).toEqual([]);
  });

  it('should not throw error if the unlike resto is not in favorite resto', async () => {
    await createLikeButtonPresenterWithResto({ id: 'rqdv5juczeskfw1e867' });

    await FavoriteRestaurantIdb.deleteRestaurant(1);

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    const allFavoriteRestaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    expect(allFavoriteRestaurant).toEqual([]);
  });
});
