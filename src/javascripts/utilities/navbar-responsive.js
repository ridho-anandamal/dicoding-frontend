const buttonMenu = document.getElementById('buttonMenu');
const navList = document.getElementById('navList');
const navItem = document.getElementsByClassName('nav-item');

const NavbarResponsive = {
  init() {
    if (this._screenMobile()) {
      this._hideNav();
    }

    buttonMenu.addEventListener('click', () => (navList.classList.contains('hidden') ? this._showNav() : this._hideNav()));

    window.addEventListener('resize', () => (this._screenMobile() ? this._hideNav() : this._showNav()));

    navItem.item(0).addEventListener('click', () => {
      if (this._screenMobile()) {
        this._hideNav();
      }
    });

    navItem.item(1).addEventListener('click', () => {
      if (this._screenMobile()) {
        this._hideNav();
      }
    });
  },

  _hideNav() {
    return navList.classList.add('hidden');
  },

  _showNav() {
    return navList.classList.remove('hidden');
  },

  _screenMobile() {
    return window.matchMedia('(max-width: 450px)').matches;
  },
};

export default NavbarResponsive;
