/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
class InputReview extends HTMLElement {
  constructor() {
    super();
    this._onError = { name: false, review: false };
    this._onErrorMsg = {
      name: 'Nama Tidak Boleh Kosong',
      review: 'Review Tidak Boleh Kosong',
    };
  }

  connectedCallback() {
    this.render();
  }

  set handleClick(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return {
      id: '',
      name: `${this.elementInputan.name.value}`,
      review: `${this.elementInputan.review.value}`,
    };
  }

  get elementInputan() {
    return {
      name: this.querySelector('#input-name'),
      review: this.querySelector('#input-review'),
      errName: this.querySelector('#err-name'),
      errReview: this.querySelector('#err-review'),
    };
  }

  _onListenerEvenet() {
    // on click button submit
    this.querySelector('#button-review').addEventListener('click', () => {
      const { name, review } = this.value;

      if (name.length === 0 && !this._onError.name) {
        this._onError.name = true;
        this._errorInput(this.elementInputan.errName, this._onErrorMsg.name);
      }

      if (review.length === 0 && !this._onError.review) {
        this._onError.review = true;
        this._errorInput(
          this.elementInputan.errReview,
          this._onErrorMsg.review,
        );
      }

      if (name.length > 0 && review.length > 0) {
        this._clickEvent();
      }
    });

    // on input/change inputan
    this.elementInputan.name.addEventListener('input', (e) => {
      const { value } = e.target;
      const { errName } = this.elementInputan;

      if (value.length === 0 && !this._onError.name) {
        this._errorInput(errName, this._onErrorMsg.name);
        this._onError.name = true;
      }
      if (value.length > 0 && this._onError.name) {
        errName.removeChild(errName.childNodes[0]);
        this._onError.name = false;
      }
    });
    this.elementInputan.review.addEventListener('input', (e) => {
      const { value } = e.target;
      const { errReview } = this.elementInputan;

      if (value.length === 0 && !this._onError.review) {
        this._errorInput(errReview, this._onErrorMsg.review);
        this._onError.review = true;
      }
      if (value.length > 0 && this._onError.review) {
        errReview.removeChild(errReview.childNodes[0]);
        this._onError.review = false;
      }
    });
  }

  _errorInput(elm, msg) {
    elm.innerHTML += `<p style="color:red;text-align:left;padding-bottom:10px">${msg}</p>`;
  }

  render() {
    const placeholder = 'Berikan review anda mengenai tempat ini ?';
    this.innerHTML = `
        <div class="input-container">
            <input id="input-name" class="input-name" type="text" name="name" placeholder="name" aria-label="Inputan, masukkan nama anda"/>
            <span id="err-name"></span>
            <textarea id="input-review" class="input-review" aria-label="Inputan, ${placeholder}" placeholder="${placeholder}" rows="5"></textarea>
            <span id="err-review"></span>
            <button id="button-review" aria-label="Submit Review" type="submit">SUBMIT</button>
        </div>
        `;
    this._onListenerEvenet();
  }
}

customElements.define('input-review', InputReview);
