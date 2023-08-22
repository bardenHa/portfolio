type Theme = 'light' | 'dark';

function stringIsTheme(theme: string): theme is Theme {
  return ['light', 'dark'].includes(theme);
}

function getInitialTheme(): Theme {
  const persistedColorPreference = window.localStorage.getItem('theme');
  const hasPersistedPreference = typeof persistedColorPreference === 'string';

  if (hasPersistedPreference && stringIsTheme(persistedColorPreference)) {
    return persistedColorPreference;
  }

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const hasMediaQueryPreference = typeof mql.matches === 'boolean';

  if (hasMediaQueryPreference) {
    return mql.matches ? 'dark' : 'light';
  }

  return 'light';
}

export function getCurrentTheme(): Theme {
  const colorScheme = document.documentElement.getAttribute('color-scheme');
  if (colorScheme && stringIsTheme(colorScheme)) {
    return colorScheme;
  }

  return getInitialTheme();
}

function setTheme(theme: Theme): Theme {
  document.documentElement.setAttribute('color-scheme', theme);
  window.localStorage.setItem('theme', theme);
  return theme;
}

export function toggleTheme(): Theme {
  return setTheme(getCurrentTheme() === 'light' ? 'dark' : 'light');
}

// TODO: create an effect for this
