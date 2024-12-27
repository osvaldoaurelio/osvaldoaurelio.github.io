const THEME_SYSTEM = "system";
const THEME_DARK = "dark";
const THEME_LIGHT = "light";

const themeSelector = document.getElementById("themes");
const themeProvider = document.querySelector("[data-theme]");
const mediaQueryDark = window.matchMedia(`(prefers-color-scheme: ${THEME_DARK})`);

const getUserPrefersTheme = () => mediaQueryDark.matches ? THEME_DARK : THEME_LIGHT;
const getThemeFromLocalStorage = () => localStorage.getItem("theme") || THEME_SYSTEM;

const setTheme = (theme = THEME_SYSTEM, mustSaveInLocalStorage = true) => {
  themeProvider.dataset.theme = (theme === THEME_SYSTEM) ? getUserPrefersTheme() : theme;
  
  if (mustSaveInLocalStorage) localStorage.setItem("theme", theme);
};

const initializeTheme = () => {
  const savedTheme = getThemeFromLocalStorage();

  themeSelector.value = savedTheme;

  setTheme(savedTheme, false);
}

initializeTheme();

themeSelector?.addEventListener("change", () => setTheme(themeSelector.value));
mediaQueryDark.addEventListener("change", () => {
  if (getThemeFromLocalStorage() !== THEME_SYSTEM) return;

  setTheme(getUserPrefersTheme());
});
