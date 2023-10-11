const showMenu = document.getElementById('menuIcon');
const mobileMenu = document.getElementById('mobileMenu');
const hideMenu = document.querySelector('#mobileMenu img');
const overlay = document.getElementById('over');

    showMenu.addEventListener('click', () => {
      mobileMenu.style.display = 'block';
      overlay.style.display = 'block';

    });
    hideMenu.addEventListener('click', () => {
      mobileMenu.style.display = 'none';
      overlay.style.display = 'none';
    });
