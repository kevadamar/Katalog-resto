import FavoriteRestaurantIdb from '../data/idb-database';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator-button';

const LikeButtonInitiator = {
  async init({ likeButtonInitiator, restaurant }) {
    this._likeButtonContainer = likeButtonInitiator;
    this._restaurant = restaurant;

    await this._renderButton();
  },
  async _renderButton() {
    const { id } = this._restaurant;
    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },
  async _isRestaurantExist(id) {
    const restaurantIsExsist = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurantIsExsist;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();
    this._actionLikeButton('add');
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();
    this._actionLikeButton('delete');
  },
  async _actionLikeButton(action) {
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      if (action === 'add') {
        await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      } else {
        await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      }
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
