import { For, JSX, ParentProps, Show } from 'solid-js';

import { Anchor, Divider, Typography } from '../components';
import { IconButton } from '../components/button';
import { useTheme } from '../hooks';
import { Moon, Sun } from '../icons';

const NAVIGATION_LINKS = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Projects',
    href: '/#featured-projects',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Uses',
    href: '/uses',
  },
];

// TODO: keep progressive enhancement in mind - https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/
// TODO: move to page.astro once ready
export function FullLayout(props: Readonly<ParentProps>): JSX.Element {
  return (
    <section class="flex min-h-screen max-w-4xl mx-auto flex-col">
      <header role="banner" id="header" class="container mx-auto p-5 transition-[max-width] duration-200 ease-in-out">
        <nav class="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div class="flex items-center justify-between">
            <a href="/" title="Home">
              <img src="/h_avatar.svg" alt="Harry Barden's avatar" class="h-12 w-12" />
            </a>
            <ColorModeSwitcher class="sm:hidden" />
          </div>
          <div class="flex items-center sm:justify-center gap-6">
            <ul class="flex items-center gap-4">
              <For each={NAVIGATION_LINKS}>
                {link => (
                  <Typography.Text as="li">
                    <Anchor href={link.href} variant="subtle" aria-current="page">
                      {link.title}
                    </Anchor>
                  </Typography.Text>
                )}
              </For>
            </ul>
            <ColorModeSwitcher class="hidden sm:block" />
          </div>
        </nav>
      </header>
      {/* // TODO: heading of page/post should be part of the header? https://benmyers.dev/blog/aria-labels-and-descriptions/ */}
      <main
        role="main"
        id="main-content"
        class="container mx-auto flex-1 px-5 transition-[max-width] duration-200 ease-in-out"
      >
        {props.children}
      </main>
      <footer class="container mx-auto p-5 pb-12 pt-0 transition-[max-width] duration-200 ease-in-out">
        <Divider size="large" />
        <div class="flex items-center justify-between">
          <Typography.Paragraph>
            <span translate="no">Harry Barden</span> © 2023
          </Typography.Paragraph>
          <Anchor href={'#header'} variant="distinguished">
            Back to top
          </Anchor>
        </div>
      </footer>
    </section>
  );
}

export function ColorModeSwitcher(props: Readonly<{ class?: string }>): JSX.Element {
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
      size={'md'}
      variant={'tertiary'}
      onClick={toggleTheme}
      class={props.class}
    />
  );
}

// TODO: make an a11y statement https://benmyers.dev/accessibility-statement/
