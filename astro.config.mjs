import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.digitalnomad.nl',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  markdown: { shikiConfig: { theme: 'github-light' } },
  integrations: [sitemap()],
});