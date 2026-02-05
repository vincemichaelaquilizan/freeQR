// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  app: {
    head: {
        script: [
        {
          src: 'https://pl28655874.effectivegatecpm.com/57/c8/25/57c825ee283851f60a47505f88fd7f1b.js',
          async: true,
        }, {
        src: "https://pl28655970.effectivegatecpm.com/85c211c61b915c5ed248a00d99af28e7/invoke.js",
        async: true,
        'data-cfasync': 'false'
      }

      ],
      title: "Free QR Code Generator — No Login, Unlimited & Permanent QR Codes",

      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: 'https://freeqr.vincemichaelaquilizan.workers.dev/image/icon.png'
        },
        {
          rel: 'canonical',
          href: 'https://freeqr.vincemichaelaquilizan.workers.dev/'
        }
      ],

      meta: [
        // Main description
        {
          name: 'description',
          content:
            'Generate free QR codes instantly with no login, no limits, and no expiration. Simple, fast, and secure QR code generator for links, text, WiFi, and more.'
        },

        // Keywords
        {
          name: 'keywords',
          content:
            'free qr code generator, qr generator, no login qr, unlimited qr codes, static qr code generator'
        },

        // Google Search Console Verification
        {
          name: 'google-site-verification',
          content: 'dEOs9uu8NQ1N1lKve-kI82M3XzmhLk0FQNn0TDFBT3w'
        },

        // OpenGraph
        { property: 'og:url', content: 'https://freeqr.vincemichaelaquilizan.workers.dev/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Free QR Code Generator — No Login' },
        {
          property: 'og:description',
          content:
            'Create unlimited free QR codes instantly. No sign-up, no tracking, permanent static QR codes.'
        },
        {
          property: 'og:image',
          content: 'https://freeqr.vincemichaelaquilizan.workers.dev/image/image.png'
        },

        // Twitter Cards
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:domain', content: 'freeqr.vincemichaelaquilizan.workers.dev' },
        { property: 'twitter:url', content: 'https://freeqr.vincemichaelaquilizan.workers.dev/' },
        { name: 'twitter:title', content: 'Free QR Code Generator — No Login' },
        {
          name: 'twitter:description',
          content:
            'Generate free QR codes instantly with no account or limits. Fast, simple, permanent.'
        },
        {
          name: 'twitter:image',
          content: 'https://freeqr.vincemichaelaquilizan.workers.dev/image/image.png'
        }
      ]
    }
  },

  devtools: { enabled: true },

  css: ['./app/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()]
  },

  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/scripts', '@nuxt/ui', '@nuxt/content', '@nuxt/hints'],

});
