const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    orderMenu.classList.add('inactive');
}

const menuBars = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuBars.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    orderMenu.classList.add('inactive');
}

const shoppIcon = document.querySelector('.navbar-shopping-cart');
const orderMenu = document.querySelector('.product-detail');

shoppIcon.addEventListener('click', toggleOrderMenu);

function toggleOrderMenu() {
    orderMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}