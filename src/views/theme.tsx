import { JSX } from 'solid-js';
import { cx } from 'class-variance-authority';

import { IconButton } from '@/lib/components';
import { Moon } from '@/lib/icons';

type Theme = 'light' | 'dark';

const DEFAULT_THEME: Theme = 'light';

declare global {
  interface Window {
    theme?: {
      initial: () => Theme;
      current: () => Theme;
      set: (theme: Theme) => Theme;
    };
  }
}

function onThemeToggle(): Theme {
  if (window.theme) {
    const theme = window.theme.current();
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    window.theme.set(nextTheme);

    const toggleElements = document.querySelectorAll('#theme-toggle');
    for (const element of toggleElements) {
      element.setAttribute('aria-checked', nextTheme === 'dark' ? 'true' : 'false');
    }

    return nextTheme;
  }

  return DEFAULT_THEME;
}

export function ColorModeSwitcher(props: Readonly<{ class?: string }>): JSX.Element {
  return (
    <IconButton
      id="theme-toggle"
      icon={<Moon aria-label="Toggle theme" />}
      title="Toggle theme"
      aria-label="Enable dark mode"
      aria-checked={window.theme?.current() === 'dark'}
      role="switch"
      size={'md'}
      variant={'tertiary'}
      class={cx('h-12 w-12', props.class)}
      onclick={onThemeToggle}
    />
  );
}
