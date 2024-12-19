const SUPPORTED_LOCALES = ['en', 'es', 'pt'];

const btnSettings = document.getElementById('settings');
const settingsModal = document.getElementById('settings-modal');
const btnCloseSettingsModal = document.querySelector('#settings-modal .close');
const form = document.querySelector('#settings-modal form');

document.addEventListener('DOMContentLoaded', () => {
  const currentLocale = getLocale();

  localeRedirect(currentLocale);

  form.languages.value = currentLocale;
});

btnSettings?.addEventListener('click', () => {
  if (settingsModal.style.display === 'block') return;
  
  settingsModal.style.display = 'block';
});

const closeSettingsModal = () => {
  if (settingsModal.style.display === 'none') return;
  
  settingsModal.style.display = 'none';
};

btnCloseSettingsModal?.addEventListener('click', closeSettingsModal);
settingsModal?.addEventListener('click', ({ target }) => (target === settingsModal) && closeSettingsModal());
document.addEventListener('scroll', debounce(closeSettingsModal, 300, true));
document.addEventListener('touchmove', debounce(closeSettingsModal, 300, true));
document.addEventListener('keydown', debounce(({ key }) => (key === 'Escape') && closeSettingsModal(), 300, true));

function localeRedirect(locale) {
  const pathname = location.pathname.replaceAll('/', '') || 'en';
  if (pathname === locale) return;

  const newPath  = locale === 'en' ? '' : locale;
  location.replace(`${location.origin}/${newPath}`);
}

function getLocale() {;  
  localeFromStorage = localStorage.getItem('locale').trim();
  
  if (localeFromStorage) return localeFromStorage;

  const localeFromClient = navigator.language.split('-').shift().trim() || 'en';
  setLocale(localeFromClient);

  return localeFromClient;
}

function setLocale(newLocale) {
  if (!SUPPORTED_LOCALES.includes(newLocale)) return;

  const locale = getLocale();
  if (locale === newLocale ) return;

  localStorage.setItem('locale', newLocale);

  localeRedirect(newLocale); 
}

form?.addEventListener('submit', e => {
  e.preventDefault();
  
  const { languages, themes } = e.target;

  setLocale(languages.value);

  closeSettingsModal();
});
