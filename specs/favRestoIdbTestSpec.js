import FavoriteRestaurantIdb from '../src/scripts/data/idb-database';
import { favRestoModel } from './contracts/likeRestoContracts';

const { getAllRestaurants, deleteRestaurant } = FavoriteRestaurantIdb;

describe('favorite restaurant idb contract implementation', () => {
  afterEach(async () => {
    (await getAllRestaurants()).forEach(async (restaurant) => {
      await deleteRestaurant(restaurant.id);
    });
  });

  favRestoModel(FavoriteRestaurantIdb);
});
