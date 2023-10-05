import { JSX } from 'solid-js';
import { cx } from 'class-variance-authority';

import { IconButton } from '@/lib/components';
import { Moon } from '@/lib/icons';

// TODO: fix flashing on page load
export function ColorModeSwitcher(props: Readonly<{ class?: string }>): JSX.Element {
  return (
    <IconButton
      id="theme-toggle"
      icon={<Moon aria-label="Switch to dark mode" />}
      aria-label="Theme toggle"
      role="switch"
      size={'md'}
      variant={'tertiary'}
      class={cx('h-12 w-12', props.class)}
    />
  );
}
