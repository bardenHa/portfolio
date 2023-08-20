import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import prism from 'rehype-prism-plus';
import solid from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
  site: 'https://barden.dev',
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    ssr: {
      noExternal: ['@kobalte/core'],
    },
  },
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [prism],
  },
  integrations: [mdx(), prefetch(), sitemap(), tailwind(), solid()],
  experimental: {
    viewTransitions: true,
  },
});
