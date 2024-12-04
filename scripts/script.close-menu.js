const SWIPE_THRESHOLD = 50;

const menuCheckbox = document.querySelector('.navbar input.menu-checkbox');
const menuLabel = document.querySelector('.navbar label[for="menu-checkbox"]');
const menuContainer = document.querySelector('.navbar .menu-container');
const menuItems = document.querySelectorAll('.navbar .menu-content nav a');

menuCheckbox?.addEventListener('change', () => {
  menuLabel?.setAttribute('aria-expanded', menuCheckbox.checked);
});

const closeMenu = () => menuCheckbox?.click();

let initialTouchY;

const handleTouchStart = ({ touches: [touch] }) => {
  initialTouchY = touch.clientY;
};

const handleTouchEnd = ({ changedTouches: [changedTouch] }) => {
  const swipeDistanceY = changedTouch.clientY - initialTouchY;

  if (swipeDistanceY >= SWIPE_THRESHOLD) return;

  closeMenu();
};

menuContainer?.addEventListener('touchstart', handleTouchStart, { passive: true });
menuContainer?.addEventListener('touchend', handleTouchEnd, { passive: true });

menuItems.forEach(menuItem => menuItem?.addEventListener('touch', closeMenu, { passive: true }));
