import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/* Pagina's die op noindex staan (WooCommerce-schermen en Elementor-templates
   die nog placeholders bevatten) horen niet in de XML-sitemap. */
const NOINDEX = [
  '/winkel/', '/winkelwagen/', '/afrekenen/', '/mijn-account/', '/account/', '/login/', '/thank-you/',
  '/activiteiten-in/', '/country-visum/', '/veiligheid-in/', '/klimaat-in/', '/emigreren-naar/', '/kaart/',
  '/workation-in/', '/eten-en-drinken-in/', '/country-category/', '/country/', '/vermogen-van/',
  '/vermogen-van-zb_mp_naam/', '/coin-template/',
];

export default defineConfig({
  site: 'https://www.digitalnomad.nl',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  markdown: { shikiConfig: { theme: 'github-light' } },
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname;
        return !NOINDEX.includes(path);
      },
    }),
  ],
});
