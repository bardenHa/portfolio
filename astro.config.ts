import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import solid from '@astrojs/solid-js';
import prism from 'rehype-prism-plus';

export default defineConfig({
  site: 'https://barden.dev',
  vite: { resolve: { alias: { '@': '/src' } } },
  markdown: { syntaxHighlight: false, rehypePlugins: [prism] },
  integrations: [mdx(), prefetch(), sitemap(), solid()],
});
