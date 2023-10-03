  const showMenu = document.getElementById('menuIcon');
    const mobileMenu = document.getElementById('mobileMenu');
    const hideMenu = document.querySelector('#mobileMenu img');
    showMenu.addEventListener('click', () => {
      mobileMenu.style.display = 'block';
    });
    hideMenu.addEventListener('click', () => {
      mobileMenu.style.display = 'none';
    });