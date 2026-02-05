// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  app: {
    head: {
       link: [
    { rel: 'icon', type: 'image/png', href: '/image/icon.png' }
  ],
      meta: [
        {
          name: 'google-site-verification',
          content: 'dEOs9uu8NQ1N1lKve-kI82M3XzmhLk0FQNn0TDFBT3w'
        },
         { name: 'description', content: 'free qr generator without any accounts' },

        // Facebook / Open Graph
        { property: 'og:url', content: 'https://freeqr.vincemichaelaquilizan.workers.dev/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'freeQR' },
        { property: 'og:description', content: 'free qr generator without any accounts' },
        { property: 'og:image', content: 'https://freeqr.vincemichaelaquilizan.workers.dev/image/image.png' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:domain', content: 'freeqr.vincemichaelaquilizan.workers.dev' },
        { property: 'twitter:url', content: 'https://freeqr.vincemichaelaquilizan.workers.dev/' },
        { name: 'twitter:title', content: 'freeQR' },
        { name: 'twitter:description', content: 'free qr generator without any accounts' },
        { name: 'twitter:image', content: 'https://freeqr.vincemichaelaquilizan.workers.dev/image/image.png' }
  
      ]
    }
  },
  devtools: { enabled: true },
    css: ['./app/assets/css/main.css'],
  vite: {    
    plugins: [      
      tailwindcss(),    
    ]
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/hints'
  ]
})