import { JSX, createEffect, createSignal } from 'solid-js';
import { FiMoon, FiSun } from 'solid-icons/fi';
import { IconButton } from '../components';

// eslint-disable-next-line func-style, @typescript-eslint/explicit-function-return-type
const initializeTheme = () => {
  // eslint-disable-next-line functional/no-let
  let theme;
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme') as 'light' | 'dark';
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme = 'dark';
  } else {
    theme = 'light';
  }
  return theme;
};

// eslint-disable-next-line func-style, @typescript-eslint/explicit-function-return-type
export const ThemeToggler = () => {
  const [theme, setTheme] = createSignal<string>(initializeTheme());

  // eslint-disable-next-line functional/no-return-void
  createEffect(() => {
    const root = document.documentElement;
    if (theme() === 'light') {
      root.classList.remove('theme-dark');
      localStorage.setItem('theme', 'light');
    } else {
      root.classList.add('theme-dark');
      localStorage.setItem('theme', 'dark');
    }
  });

  function themeIcon(): JSX.Element {
    return theme() === 'light' ? <FiMoon /> : <FiSun />;
  }

  // eslint-disable-next-line functional/no-return-void
  createEffect(() => {
    console.log('theme changed', theme());
  });

  return (
    <div>
      <IconButton icon={themeIcon()} onClick={() => setTheme(t => (t === 'light' ? 'dark' : 'light'))}>
        {theme() === 'light' ? <FiMoon /> : <FiSun />}
        {theme()}
      </IconButton>
      <button onClick={() => setTheme(t => (t === 'light' ? 'dark' : 'light'))}>{theme()}</button>
    </div>
  );
};
