import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import vercel from '@astrojs/vercel'

export default defineConfig({
  site: 'https://agency-template.vbartalis.dev',

  base: '',

  vite: {
    plugins: [tailwindcss()]
  },
  output: 'server',
  adapter: vercel()
})
