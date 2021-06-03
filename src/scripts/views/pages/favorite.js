import FavoriteRestaurantIdb from '../../data/idb-database';
import { createCardRestoItemTemplate } from '../templates/template-creator-resto';

const Favorite = {
  async render() {
    return `
    <div class="body-content">
      <h1 style="font-size: 2rem;padding: 20px;">Favorite Restaurant</h1>
      <div id="list" class="list">

      </div>
    </div>
 `;
  },
  async afterRender() {
    const resultRestaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#list');
    if (resultRestaurants.length > 0) {
      resultRestaurants.forEach((movie) => {
        restaurantsContainer.innerHTML += createCardRestoItemTemplate(movie);
      });
    } else {
      restaurantsContainer.setAttribute(
        'style',
        'grid-template-columns:auto !important',
      );
      restaurantsContainer.innerHTML = '<span style="width:100%;text-align:center;margin-top: 40vh;"><h2>Resto Favoritemu masih kosong....</h2></span>';
    }
  },
};

export default Favorite;
