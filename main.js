const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

const menuBars = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuBars.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}