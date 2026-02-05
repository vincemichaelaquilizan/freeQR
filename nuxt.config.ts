// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  app: {
    head: {
      meta: [
        {
          name: 'google-site-verification',
          content: 'dEOs9uu8NQ1N1lKve-kI82M3XzmhLk0FQNn0TDFBT3w'
        }
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