const SUPPORTED_LANGUAGES = ['en', 'es', 'fr', 'pt'];
const DEFAULT_LANGUAGE = 'en';

const btnSettings = document.getElementById('settings');
const settingsModal = document.getElementById('settings-modal');
const btnCloseSettingsModal = document.querySelector('#settings-modal .close');
const form = document.querySelector('#settings-modal form');
const btnSubmit = document.querySelector('#settings-modal form button[type="submit"]');

document.addEventListener('DOMContentLoaded', () => {
  const currentLanguage = getLanguage();

  form.languages.value = currentLanguage;

  return loadLanguageContent(currentLanguage);
});

btnSettings?.addEventListener('click', () => {
  settingsModal.classList.add('is-open');
  settingsModal.setAttribute('aria-hidden', 'false');
});

const closeSettingsModal = () => {
  settingsModal.classList.remove('is-open');
  settingsModal.setAttribute('aria-hidden', 'true');
};

btnCloseSettingsModal?.addEventListener('click', closeSettingsModal);
settingsModal?.addEventListener('click', ({ target }) => (target === settingsModal) && closeSettingsModal());
document.addEventListener('scroll', debounce(closeSettingsModal, 300, true));
document.addEventListener('touchmove', debounce(closeSettingsModal, 300, true));
document.addEventListener('keydown', ({ key }) => (key === 'Escape') && closeSettingsModal());


async function loadLanguageContent(language) {
  if (document.documentElement.lang.split('-').shift() === language) return;

  const response = await fetch(`/assets/i18n/messages/${language}.json`);
  const messages = await response.json();

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const [key, content = 'textContent'] = el.getAttribute('data-i18n').split('-');

    el[content] = messages[key];
  });
}

function getLanguageFromStorage() {
  return localStorage.getItem('language')?.trim();
}

function getLanguageFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const languageFromUrl = params.get('languages')?.trim();

  return (SUPPORTED_LANGUAGES.includes(languageFromUrl)) ? languageFromUrl : DEFAULT_LANGUAGE;
}

function getLanguage() {
  const languageFromStorage = getLanguageFromStorage();
  const languageFromUrl = getLanguageFromUrl();
  
  if (languageFromStorage !== languageFromUrl) setLanguageOnStorage(languageFromUrl);

  return languageFromUrl;
}

function setLanguageOnStorage(language) {
  localStorage.setItem('language', language);
}

function setLanguageOnUrl(language) {
  const { search, pathname } = window.location;

  const params = new URLSearchParams(search);
  params.set('languages', language);
  
  const newUrl = `${pathname}${(language === DEFAULT_LANGUAGE) ? '': `?${params.toString()}`}`;

  window.history.replaceState({}, '', newUrl); 
}

function setLanguage(language) {
  if (language === getLanguage()) return;

  setLanguageOnStorage(language);
  setLanguageOnUrl(language); 
}

form?.addEventListener('submit', async e => {
  e.preventDefault();

  btnSubmit.setAttribute('aria-busy', 'true');
  btnSubmit.setAttribute('data-loading', 'true');

  const { value: selectedLanguage } = e.target.languages;

  setLanguage(selectedLanguage);

  try {
    await loadLanguageContent(selectedLanguage);
  } finally {
    btnSubmit.setAttribute('aria-busy', 'false');
    btnSubmit.setAttribute('data-loading', 'false');
    closeSettingsModal();
  }
});
