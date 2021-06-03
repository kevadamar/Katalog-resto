import CONFIG from '../../globals/config';

const createCardRestoItemTemplate = (data) => `
<div class="item">
 <img class="item-image" src="${
  data.pictureId
    ? CONFIG.BASE_IMAGE_URL + data.pictureId
    : 'https://picsum.photos/id/666/800/450?grayscale'
}" alt="${data.name}" title="${data.name}">

  <div class="container p-all-16">
    <div class="d-flex-end-w">
      <span class="item-city">Kota : ${data.city}</span>
      <span class="item-rating">★ ${data.rating}/5.0</span>
    </div>
    <a href="${`/#/detail/${data.id}`}" style="color:black">
      <h1 class="item-title">${data.name}</h1>
    </a>
      <div class="item-description">${data.description}</div>
  </div>
</div>
 
  `;

const createDetailRestoItemTemplate = (data) => `
<p class="resto-title">${data.name}</p>
<img class="resto-poster" src="${
  CONFIG.BASE_IMAGE_URL + data.pictureId
}" alt="${data.name}" />
<div class="font-med resto-info p-all-16">
  <span id="information" class="infor-css infor-css-on">
    <h3 class="info-tag-detail mb-5">Information</h3>
    <h4>Kategori</h4>
    <p class="pb-10">${data.categories.map((v) => v.name).join(', ')}</p>
    <h4>Kota</h4>
    <p class="pb-10">${data.city}</p>
    <h4>Alamat</h4>
    <p class="pb-10">${data.address}</p>
    <h4>Rating</h4>
    <p class="pb-10">${data.rating}</p>
    <h4>Deskripsi</h4>
    <p class="mb-5">${data.description}</p>
    <span class="d-flex-menus">
      <h4>Menu Makanan : </h4>
      <ul>
      ${data.menus.foods
    .map((vs) => `<li class="mb-5"> - ${vs.name.split(',')}</li>`)
    .join('')}
      </ul>
      <h4>Menu Minuman : </h4>
      <ul>
      ${data.menus.drinks
    .map((vs) => `<li class="mb-5"> - ${vs.name.split(',')}</li>`)
    .join('')}
      </ul>
    </span>
  </span>
  <button-element></button-element>
</div>
<div class="resto-overview mb-15 p-all-16">
  <h2>Customer Reviews</h2>
  <div class="list">
  ${data.customerReviews
    .map(
      (review) => `
  <div class="item p-all-16 text-center">
    <div class="font-high pb-10">
      <i class="fas fa-user-circle"></i>
    </div>
    <h1 class="pb-10">${review.name}</h1>
    <p class="mb-5 font-med item-detail-review">${review.review}</p>
    <h4 class="pb-10">${review.date}</h4>
  </div>
`,
    )
    .join('')}
  </div>
</div>
<div class="resto-input-review mb-15 p-all-16">
  <input-review></input-review>
</div>
  `;

export { createCardRestoItemTemplate, createDetailRestoItemTemplate };
