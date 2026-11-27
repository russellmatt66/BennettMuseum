import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  output: 'static',
  site: 'https://example.com',
  markdown: { remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] },
  integrations: [sitemap()],
  site: 'https://bennettmuseum.pages.dev/'
});