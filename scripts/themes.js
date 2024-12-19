const THEME_SYSTEM = "system";
const THEME_DARK = "dark";
const THEME_LIGHT = "light";

const themeSelector = document.getElementById("themes");
const themeProvider = document.querySelector("[data-theme]");
const mediaQueryDark = window.matchMedia(`(prefers-color-scheme: ${THEME_DARK})`);

const getUserPrefersTheme = () => mediaQueryDark.matches ? THEME_DARK : THEME_LIGHT;

const getThemeFromLocalStorage = () => localStorage.getItem("theme") || THEME_SYSTEM;
const setThemeInLocalStorage = (theme) => localStorage.setItem("theme", theme);

const initializeTheme = () => {
  const savedTheme = getThemeFromLocalStorage();

  if (savedTheme !== THEME_SYSTEM) {
    themeProvider.dataset.theme = savedTheme;
  } else {
    themeProvider.dataset.theme = getUserPrefersTheme();
  }

  themeSelector.value = savedTheme;
}

initializeTheme();

const applyTheme = () => {
  const { value: selectedTheme } = themeSelector;

  setThemeInLocalStorage(selectedTheme);

  if (selectedTheme !== THEME_SYSTEM) {
    themeProvider.dataset.theme = selectedTheme;
  } else  {
    themeProvider.dataset.theme = getUserPrefersTheme();
  }
}

const handleSystemThemeChange = () => {
  if (getThemeFromLocalStorage() === THEME_SYSTEM) {
    themeProvider.dataset.theme = getUserPrefersTheme();
  }
}

themeSelector?.addEventListener("change", applyTheme);
mediaQueryDark.addEventListener("change", handleSystemThemeChange);
