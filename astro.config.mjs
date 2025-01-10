// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://pathalgebra.github.io/',
  base: 'pathdbweb',
  integrations: [tailwind(), svelte()]
});
