// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  site: 'platform-engineering-for-architects.github.io',
  base: 'landingpage',
  integrations: [
    tailwind(),
    alpinejs()
  ]
});
