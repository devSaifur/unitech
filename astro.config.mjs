import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://agency-template.vbartalis.dev',

  base: '',

  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  }
})
