let hamburger = document.querySelector('.hamburger');

hamburger.onclick = () => {
    let menu = document.querySelector('.header__menu');

    menu.classList.toggle('header__menu_open');
    hamburger.classList.toggle('hamburger_close');
};