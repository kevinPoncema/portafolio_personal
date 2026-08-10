import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://kevinponcema.github.io',
  base: '/portafolio_personal',
  integrations: [tailwind()]
});