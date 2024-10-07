// src/toggleMenu.js
export const toggleMenu = () => {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  } else {
    console.error('El menú móvil no se encontró.');
  }
};
