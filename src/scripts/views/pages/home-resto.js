import Service from '../../data/service';
import { createCardRestoItemTemplate } from '../templates/template-creator-resto';

const HomeResto = {
  async render() {
    return `
    <hero-element></hero-element>
    <div class="body-content">
      <h1 style="font-size: 2rem;padding: 20px;">Explore Restaurant</h1>
      <search-bar></search-bar>
      <div id="list" class="list">

      </div>
    </div>
            `;
  },
  async afterRender() {
    const listRestoContainer = document.querySelector('#list');
    listRestoContainer.setAttribute(
      'style',
      'grid-template-columns:auto !important',
    );
    listRestoContainer.innerHTML = '<span style="width:100%;text-align:center;margin-top: 40vh;"><h2>Loading. . . . .</h2></span>';

    const { restaurants } = await Service.listRestaurant();

    if (restaurants.length === 0) {
      listRestoContainer.innerHTML = '<span style="width:100%;text-align:center;margin-top: 40vh;"><h2>List Resto kosong....</h2></span>';
    } else {
      listRestoContainer.removeAttribute('style');
      listRestoContainer.innerHTML = '';
    }

    if (restaurants.error) {
      listRestoContainer.setAttribute(
        'style',
        'grid-template-columns:auto !important',
      );
      listRestoContainer.innerHTML = `<span style="width:100%;text-align:center;margin-top: 40vh;"><h2>Error : ${restaurants.message}</h2></span>`;
    }

    this.renderList(listRestoContainer, restaurants);

    const searchElement = document.querySelector('search-bar');
    searchElement.onChangeEvent = async () => {
      listRestoContainer.innerHTML = '';
      if (searchElement.value.length > 0) {
        const { restaurants: searchResto } = await Service.searchRestaurant(
          searchElement.value,
        );
        this.renderList(listRestoContainer, searchResto);
      } else {
        this.renderList(listRestoContainer, restaurants);
      }
    };
  },
  renderList(elementContainer, data) {
    data.forEach((restaurant) => {
      // eslint-disable-next-line no-param-reassign
      elementContainer.innerHTML += createCardRestoItemTemplate(restaurant);
    });
  },
};

export default HomeResto;
