var mobileMenu = document.getElementById('mobileMenuDropdown');
var menuButton = document.getElementById('navMobileMenu');
var menuBurger = document.getElementById('mobileMenuBurger');
var menuX = document.getElementById('mobileMenuX');

function toggleMobileMenu() {
    console.log('toggle on/off');
    menuX.classList.toggle("mobile-menu-x-show");
    menuX.classList.toggle("mobile-menu-x");
    menuBurger.classList.toggle("mobile-menu-burger-hide");
    menuBurger.classList.toggle("mobile-menu-burger");
    mobileMenu.classList.toggle("mobile-menu-show");
    mobileMenu.classList.toggle("mobile-menu");
}