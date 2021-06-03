const DrawerInitiator = {
  init({ button, drawer, content }) {
    // eslint-disable-next-line no-unused-vars
    let yOffset = window.pageYOffset;
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, button);
    });
    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, button);
    });

    window.onscroll = () => {
      const currYOffset = window.pageYOffset;

      if (currYOffset > 10) {
        button.classList.remove('active');
        drawer.classList.remove('active');
        drawer.classList.remove('bg-steelblue');
      }
      yOffset = currYOffset;
    };
  },
  _toggleDrawer(event, drawer, button) {
    event.stopPropagation();
    button.classList.toggle('active');
    drawer.classList.toggle('active');
    drawer.classList.toggle('bg-steelblue');
  },
  _closeDrawer(event, drawer, button) {
    event.stopPropagation();
    button.classList.remove('active');
    drawer.classList.remove('active');
    drawer.classList.remove('bg-steelblue');
  },
};

export default DrawerInitiator;
