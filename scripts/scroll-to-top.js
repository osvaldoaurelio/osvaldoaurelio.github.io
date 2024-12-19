function scrollToTop() {
  const SCROLL_THRESHOLD = 300;

  const goToTopButton = document.getElementById('go-to-top');

  if (!goToTopButton) return;

  window.addEventListener('scroll', debounce(() => {
    if (window.scrollY > SCROLL_THRESHOLD) {
      goToTopButton.style.display = 'flex';
    } else {
      goToTopButton.style.display = 'none';
    }
  }));

  goToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0 });
  });
}

scrollToTop();
