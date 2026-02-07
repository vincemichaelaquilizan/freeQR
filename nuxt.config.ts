import tailwindcss from "@tailwindcss/vite";
// <meta name='' content=Bqjw5pdkG>
// <meta name="monetag" content="399a7c25ec4a54664ceac1cd096cdf96">
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  plugins: [

    '~/plugins/sw.client.ts',
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en' // Important for SEO and accessibility
      },
      title: "Free QR Code Generator — No Login, Unlimited & Permanent",
      meta: [
        { charset: "utf-8" },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {name:"monetag",content:"399a7c25ec4a54664ceac1cd096cdf96"},
        {name:"admaven-placement",content:"Bqjw5pdkG"},
        // --- CRITICAL SEO FIX ---
        // Changed "noindex, nofollow" to "index, follow" so Google can find you
        { name: "robots", content: "index, follow" },
        
        { 
          name: 'description', 
          content: 'Generate free QR codes instantly with no login or limits. Create high-quality, permanent static QR codes for URLs, WiFi, and text. 100% free and secure.' 
        },
        { 
          name: 'keywords', 
          content: 'free qr code generator, no login qr code, permanent qr codes, unlimited qr generator, static qr code' 
        },

        // Verification
        { name: 'google-site-verification', content: 'dEOs9uu8NQ1N1lKve-kI82M3XzmhLk0FQNn0TDFBT3w' },

        // OpenGraph (Facebook/LinkedIn)
        { property: 'og:site_name', content: 'Free QR Generator' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://freeqr.vincemichaelaquilizan.workers.dev/' },
        { property: 'og:title', content: 'Free QR Code Generator — No Login Required' },
        { property: 'og:description', content: 'Create unlimited, permanent QR codes for free. Simple, fast, and no sign-up needed.' },
        { property: 'og:image', content: 'https://freeqr.vincemichaelaquilizan.workers.dev/image/image.png' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Free QR Code Generator — No Login' },
        { name: 'twitter:description', content: 'Generate unlimited free QR codes instantly. No account, no expiration.' },
        { name: 'twitter:image', content: 'https://freeqr.vincemichaelaquilizan.workers.dev/image/image.png' }
      ],

      link: [
        { rel: 'icon', type: 'image/png', href: 'https://freeqr.vincemichaelaquilizan.workers.dev/image/icon.ico' },
        { rel: 'canonical', href: 'https://freeqr.vincemichaelaquilizan.workers.dev/' }
      ],

// <script src="https://quge5.com/88/tag.min.js" data-zone="209272" async data-cfasync="false"></script>
      script: [
             {
          src: "https://quge5.com/88/tag.min.js",
          async: true,
          "data-zone": "209272",
          "data-cfasync": "false"
        },  {
          src: "https://pl28655970.effectivegatecpm.com/85c211c61b915c5ed248a00d99af28e7/invoke.js",
          async: true,
          'data-cfasync': false,
          tagPosition: 'bodyClose' // Best practice for ad/external scripts to improve page speed
        },
        {
          src: "sw.js",
        }
      ]
    }
  },

  // Modules & Styling
  modules: [
    '@nuxt/eslint', 
    '@nuxt/image', 
    '@nuxt/scripts', 
    '@nuxt/ui', 
    '@nuxt/content', 
    '@nuxt/hints',
    '@nuxtjs/sitemap' // Recommended: install this module for better SEO
  ],

  css: ['./app/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()]
  },

  devtools: { enabled: true }
});