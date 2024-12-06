function setYear() {
  const yearContainer = document.getElementById('year');
  if (!yearContainer) return;

  yearContainer.textContent = new Date().getFullYear();
}

setYear();
