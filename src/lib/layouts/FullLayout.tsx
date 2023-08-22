import { FiMoon, FiSun } from 'solid-icons/fi';
import { For, JSX, ParentProps } from 'solid-js';

import { Anchor, Divider, IconButton, Typography } from '../components';
import { getCurrentTheme, toggleTheme } from '../utils';

const NAVIGATION_LINKS = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Projects',
    href: '#projects',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
];

// TODO: move to page.astro once ready
export function FullLayout(props: Readonly<ParentProps>): JSX.Element {
  return (
    <section class="flex flex-col min-h-screen h-screen overflow-x-hidden bg-content-neutral-primary">
      {/* TODO: create a container component */}
      <header id="top" class="container mx-auto p-5 transition-[max-width] duration-200 ease-in-out">
        <div class="flex items-center justify-between">
          <a href="/">
            <img src="/h_avatar.svg" alt="Harry's avatar" class="w-8 h-8" />
          </a>
          <div class="hidden md:flex gap-6">
            <nav class="flex items-center gap-4">
              <For each={NAVIGATION_LINKS}>
                {link => (
                  <Typography.Label size="small">
                    <Anchor href={link.href} variant="subtle">
                      {link.title}
                    </Anchor>
                  </Typography.Label>
                )}
              </For>
            </nav>
            <ColorModeSwitcher />
          </div>
        </div>
      </header>
      <main class="container mx-auto p-5 transition-[max-width] duration-200 ease-in-out flex-1">{props.children}</main>
      <footer class="container mx-auto p-5 pt-0 pb-12 transition-[max-width] duration-200 ease-in-out">
        <Divider size="large" />
        <div class="flex justify-between items-center">
          <Typography.Paragraph>All Rights Reserved © 2023</Typography.Paragraph>
          <Anchor href={'#top'} variant="distinguished" colourScheme="primary">
            Back to top
          </Anchor>
        </div>
      </footer>
    </section>
  );
}

export function ColorModeSwitcher(): JSX.Element {
  return (
    <IconButton
      aria-label="Theme to toggle dark mode"
      size={'small'}
      variant={'ghost'}
      onClick={toggleTheme}
      icon={getCurrentTheme() === 'light' ? <FiSun /> : <FiMoon />}
    />
  );
}
