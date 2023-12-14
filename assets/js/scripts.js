'use strict'

function classToggle(){
    const navItems = document.querySelectorAll('.navbar__items');
    navItems.forEach((navItem) => navItem.classList.toggle('navbar__ToggleShow'));
}
document.querySelector('.navbar__Link-toggle').addEventListener('click', classToggle);