import FavoriteRestaurantIdb from '../src/scripts/data/idb-database';
import { createLikeButtonPresenterWithResto } from './helpers/testFactories';

const {
  getAllRestaurants, putRestaurant, deleteRestaurant, getRestaurant,
} = FavoriteRestaurantIdb;

describe('Liking Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML += '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
    putRestaurant({ id: 'rqdv5juczeskfw1e867' });
  });

  it('should show the like button when the resto has not been liked before', async () => {
    await createLikeButtonPresenterWithResto({
      id: 'rqdv5juczeskfw1e867',
    });

    expect(
      document.querySelector('[aria-label="unlike this restaurant"]'),
    ).toBeTruthy();
  });

  it('should not show the unlike button when the resto has not been liked before', async () => {
    await createLikeButtonPresenterWithResto({
      id: 'rqdv5juczeskfw1e867',
    });

    expect(
      document.querySelector('[aria-label="like this restaurant"]'),
    ).toBeFalsy();
  });

  it('should be able to like the resto', async () => {
    await createLikeButtonPresenterWithResto({
      id: 'rqdv5juczeskfw1e867',
    });

    const resto = await getRestaurant('rqdv5juczeskfw1e867');
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(resto).toEqual({ id: 'rqdv5juczeskfw1e867' });

    await deleteRestaurant('rqdv5juczeskfw1e867');
  });

  it('should not add a resto again when its already liked', async () => {
    await createLikeButtonPresenterWithResto({
      id: 'rqdv5juczeskfw1e867',
    });

    await putRestaurant({ id: 'rqdv5juczeskfw1e867' });
    const allResto = await getAllRestaurants();
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(allResto).toEqual([{ id: 'rqdv5juczeskfw1e867' }]);

    await deleteRestaurant('rqdv5juczeskfw1e867');
  });
});
