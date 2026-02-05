<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>

<script setup>
import { useHead } from '#app'

useHead({
  title: 'freeQR',
  meta: [
    { name: 'description', content: 'free qr generator without any accounts' },

    // Open Graph / Facebook
    { property: 'og:title', content: 'freeQR' },
    { property: 'og:description', content: 'free qr generator without any accounts' },
    { property: 'og:image', content: '/image/image.png' },
    { property: 'og:type', content: 'website' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'freeQR' },
    { name: 'twitter:description', content: 'free qr generator without any accounts' },
    { name: 'twitter:image',content: '/image/image.png'  },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/image/icon.png' }
  ]
})
</script>
