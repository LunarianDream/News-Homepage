'use strict';

const menuButton = document.querySelector('#menu_button');
const closeMenuButton = document.querySelector('#close_menu_button');
const offCanvasMenu = document.querySelector('#off_canvas_menu');

// const menuToggle = () => {
//     if (offCanvasMenu.hasAttribute('class', 'menu_closed')) {
//         offCanvasMenu.setAttribute('class', 'menu_expanded')
//     } else if (offCanvasMenu.hasAttribute('class', 'menu_expanded')) {
//         offCanvasMenu.setAttribute('class', 'menu_closed')
//     };
// }

menuButton.addEventListener('click', () => {
    offCanvasMenu.classList.remove('menu_closed');
    offCanvasMenu.classList.add('menu_expanded');
});
closeMenuButton.addEventListener('click', () => {
    offCanvasMenu.classList.remove('menu_expanded');
    offCanvasMenu.classList.add('menu_closed');
});