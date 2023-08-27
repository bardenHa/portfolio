import { createSignal, onMount } from 'solid-js';

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

function getCurrentTheme(): Theme {
  console.log('getCurrentTheme');
  const colorScheme = document.documentElement.getAttribute('color-scheme');
  if (colorScheme && stringIsTheme(colorScheme)) {
    console.log('colorScheme', colorScheme);
    return colorScheme;
  }

  console.log('getInitialTheme');
  return getInitialTheme();
}

function setTheme(theme: Theme): Theme {
  document.documentElement.setAttribute('color-scheme', theme);
  window.localStorage.setItem('theme', theme);
  return theme;
}

function toggleTheme(): Theme {
  return setTheme(getCurrentTheme() === 'light' ? 'dark' : 'light');
}

export function useTheme(): [() => Theme, () => Theme] {
  const [state, setState] = createSignal<Theme>('light');

  function toggleState(): Theme {
    return setState(toggleTheme());
  }

  onMount(() => setState(setTheme(getCurrentTheme())));
  return [state, toggleState];
}
