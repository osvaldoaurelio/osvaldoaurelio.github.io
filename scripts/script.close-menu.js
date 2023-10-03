const SWIPE_THRESHOLD = 50;

const menuCheckbox = document.querySelector('.navbar input.menu-checkbox');
const menuContainer = document.querySelector('.navbar .menu-container');
const menuItems = document.querySelectorAll('.navbar .menu-content ul li a')

let inicialClientY;

const closeMenu = () => menuCheckbox?.click();

const handleTouchStart = event => {
  inicialClientY = event.touches[0].clientY;
};

const handleTouchEnd = event => {
  const finalClientY = event.changedTouches[0].clientY;
  const swipedUp = finalClientY - inicialClientY < SWIPE_THRESHOLD;

  if (!swipedUp) return;
  
  closeMenu();
}

menuContainer?.addEventListener('touchstart', handleTouchStart);
menuContainer?.addEventListener('touchend', handleTouchEnd);

menuItems.forEach(m => m.addEventListener('click', closeMenu));
