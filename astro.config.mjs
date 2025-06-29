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
  adapter: vercel({
    imageService: true,
    imagesConfig: {
      sizes: [320, 640, 1280],
      formats: ['image/webp', 'image/avif'],
      domains: []
    },
    devImageService: 'sharp'
  }),
  env: {
    schema: {
      DISCORD_WEBHOOK_URL: {
        type: 'string',
        default: '',
        description: 'Discord webhook URL for contact form submissions',
        access: 'secret',
        context: 'server'
      }
    }
  }
})
