import { For, JSX, ParentProps, Show } from 'solid-js';

import { Anchor, Divider, Typography } from '../components';
import { IconButton } from '../components/Button';
import { useTheme } from '../hooks';
import { Moon, Sun } from '../icons';

const NAVIGATION_LINKS = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Projects',
    href: '#featured-projects',
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

// TODO: keep progressive enhancement in mind - https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/
// TODO: move to page.astro once ready
export function FullLayout(props: Readonly<ParentProps>): JSX.Element {
  console.log(props);
  return (
    <section class="flex flex-col min-h-screen h-screen overflow-x-hidden bg-content-neutral-primary">
      {/* TODO: create a container component */}
      <header id="header" class="container mx-auto p-5 transition-[max-width] duration-200 ease-in-out">
        <nav class="flex items-center justify-between">
          <a href="/" title="Home">
            <img src="/h_avatar.svg" alt="Harry Barden's avatar" class="w-8 h-8" />
          </a>
          <div class="hidden md:flex gap-6">
            <ul class="flex items-center gap-4">
              <For each={NAVIGATION_LINKS}>
                {link => (
                  <Typography.Text as="li" size="small">
                    <Anchor href={link.href} variant="subtle" aria-current="page">
                      {link.title}
                    </Anchor>
                  </Typography.Text>
                )}
              </For>
            </ul>
            <ColorModeSwitcher />
          </div>
        </nav>
      </header>
      {/* // TODO: heading of page/post should be part of the header? https://benmyers.dev/blog/aria-labels-and-descriptions/ */}
      <main class="container mx-auto p-5 transition-[max-width] duration-200 ease-in-out flex-1">{props.children}</main>
      <footer class="container mx-auto p-5 pt-0 pb-12 transition-[max-width] duration-200 ease-in-out">
        <Divider size="large" />
        <div class="flex justify-between items-center">
          <Typography.Paragraph>
            <span translate="no">Harry Barden</span> © 2023
          </Typography.Paragraph>
          <Anchor href={'#header'} variant="distinguished" colourScheme="primary">
            Back to top
          </Anchor>
        </div>
      </footer>
    </section>
  );
}

export function ColorModeSwitcher(): JSX.Element {
  const [theme, toggleTheme] = useTheme();

  // TODO: fix a11y on this
  return (
    <IconButton
      icon={
        <Show when={theme() === 'light'} fallback={<Moon aria-label="Switch to dark mode" />}>
          <Sun aria-label="Switch to light mode" />
        </Show>
      }
      aria-label="Theme toggle switch"
      role="switch"
      size={'sm'}
      variant={'tertiary'}
      onClick={toggleTheme}
    />
  );
}

// TODO: make an a11y statement https://benmyers.dev/accessibility-statement/
