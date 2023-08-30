import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import prism from 'rehype-prism-plus';
import solid from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
  site: 'https://barden.dev', // TODO: define in var
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [prism],
  },
  integrations: [mdx(), prefetch(), sitemap(), tailwind(), solid()],
});
