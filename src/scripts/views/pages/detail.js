import Service from '../../data/service';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createDetailRestoItemTemplate } from '../templates/template-creator-resto';

const Detail = {
  async render() {
    return `
            <div id="resto" class="resto"></div>
            <div id="likeButtonContainer"></div>
          `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restoContainer = document.querySelector('#resto');

    restoContainer.setAttribute(
      'style',
      'grid-template-columns:auto !important',
    );
    restoContainer.innerHTML = '<span style="width:100%;text-align:center;margin-top: 40vh;"><h2>Loading. . . . .</h2></span>';

    const { restaurant } = await Service.detailRestaurant(url.id);
    if (!restaurant) {
      restoContainer.innerHTML = '<span style="width:100%;text-align:center;margin-top: 40vh;"><h2>Detail Resto kosong....</h2></span>';
    } else {
      restoContainer.removeAttribute('style');
      restoContainer.innerHTML = '';
    }

    if (restaurant.error) {
      restoContainer.setAttribute(
        'style',
        'grid-template-columns:auto !important',
      );
      restoContainer.innerHTML = `<span style="width:100%;text-align:center;margin-top: 40vh;"><h2>Error : ${restaurant.message}</h2></span>`;
    }

    restoContainer.innerHTML = createDetailRestoItemTemplate(restaurant);

    const buttonElement = document.querySelector('button-element');
    const informationContainer = document.querySelector('#information');
    const submitInputElement = document.querySelector('input-review');

    buttonElement.handleClick = () => {
      if (!buttonElement.getStateButton) {
        informationContainer.classList.remove('infor-css-on');
        informationContainer.classList.add('infor-css-off');
        buttonElement.setStateButton = 1;
      } else {
        informationContainer.classList.remove('infor-css-off');
        informationContainer.classList.add('infor-css-on');
        buttonElement.setStateButton = 0;
      }
    };

    submitInputElement.handleClick = async () => {
      const payload = submitInputElement.value;
      const response = await Service.addCustomerReview({
        ...payload,
        id: url.id,
      });

      if (response.error) {
        // eslint-disable-next-line no-alert
        alert('error add customer review');
      }
      location.reload();
    };
    LikeButtonInitiator.init({
      likeButtonInitiator: document.querySelector('#likeButtonContainer'),
      restaurant,
    });
  },
};

export default Detail;
