import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonPresenterWithResto = async (restaurant) => {
  // console.log(document.querySelector('#likeButtonContainer'), restaurant);
  await LikeButtonInitiator.init({
    likeButtonInitiator: document.querySelector('#likeButtonContainer'),
    restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithResto };
