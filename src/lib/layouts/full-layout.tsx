import { JSX, Show } from 'solid-js';
import { cx } from 'class-variance-authority';

import { IconButton } from '../components';
import { useTheme } from '../hooks';
import { Moon, Sun } from '../icons';

// TODO: keep progressive enhancement in mind - https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/
// TODO: move to page.astro once ready

export function ColorModeSwitcher(props: Readonly<{ class?: string }>): JSX.Element {
  const [theme, toggleTheme] = useTheme();

  return (
    <IconButton
      icon={
        <Show when={theme() === 'light'} fallback={<Moon aria-label="Switch to dark mode" />}>
          <Sun aria-label="Switch to light mode" />
        </Show>
      }
      aria-label="Theme toggle"
      role="switch"
      size={'md'}
      variant={'tertiary'}
      onClick={toggleTheme}
      class={cx('h-12 w-12', props.class)}
    />
  );
}
