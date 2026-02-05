<template>
  <div class="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
    <header class="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center sticky top-0 z-30">
      <div class="flex items-center gap-2">
        <h1 class="text-2xl font-bold text-blue-600">FreeQR</h1>
      </div>
      <button @click="exportFullPreview" class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl font-semibold transition-all shadow-lg shadow-indigo-100 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
        Export Design
      </button>
    </header>

    <main class="max-w-6xl mx-auto p-6 lg:p-12 grid lg:grid-cols-12 gap-12">
      <div class="lg:col-span-7 space-y-6">
        
        <section class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h2 class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">1. Content</h2>
          <input v-model="qrText" type="text" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="Enter URL or text..." />
        </section>

        <section class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h2 class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">2. Graphics & Background</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <label class="text-sm font-medium text-slate-700 block">Pattern Color</label>
              <div class="flex items-center gap-3">
                <input type="color" v-model="qrColor" class="w-10 h-10 rounded-lg cursor-pointer border-none bg-transparent" />
                <code class="text-xs text-slate-400 font-mono">{{ qrColor }}</code>
              </div>
            </div>
            <div class="space-y-4">
              <label class="text-sm font-medium text-slate-700 block">Background Settings</label>
              <div class="flex items-center gap-4">
                <input type="color" v-model="bgColor" :disabled="isTransparent" class="w-10 h-10 rounded-lg cursor-pointer border-none bg-transparent disabled:opacity-20" />
                <label class="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" v-model="isTransparent" class="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                  <span class="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Transparent</span>
                </label>
              </div>
            </div>
            <div class="md:col-span-2 space-y-2">
              <label class="text-sm font-medium text-slate-700">Pattern Style</label>
              <div class="flex gap-2">
                <button v-for="type in ['square', 'dots', 'rounded', 'extra-rounded']" :key="type" 
                  @click="qrType = type"
                  :class="qrType === type ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-100 text-slate-600'"
                  class="flex-1 py-2 text-xs font-bold rounded-lg capitalize transition-all">
                  {{ type }}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xs font-bold uppercase tracking-widest text-slate-400">3. Frame Customization</h2>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" v-model="hasFrame" class="sr-only peer">
              <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-indigo-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            </label>
          </div>
          
          <div v-if="hasFrame" class="space-y-6 animate-in">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
              <button v-for="style in ['bubble', 'top', 'below', 'border']" :key="style"
                @click="frameStyle = style"
                :class="frameStyle === style ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-100 text-slate-400'"
                class="px-4 py-3 border-2 rounded-xl text-sm font-bold capitalize transition-all">
                {{ style }}
              </button>
            </div>
            <div class="grid md:grid-cols-2 gap-6 pt-2">
              <div class="space-y-2">
                <label class="text-sm font-medium text-slate-700">Label Text</label>
                <input v-model="frameText" type="text" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 uppercase font-bold" />
              </div>
              <div class="space-y-2">
                <label class="text-sm font-medium text-slate-700">Frame Color</label>
                <input type="color" v-model="frameColor" class="w-full h-10 rounded-lg cursor-pointer border-none bg-transparent" />
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h2 class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">4. Center Logo</h2>
          <div class="flex items-center gap-4">
            <div v-if="logoFile" class="relative">
              <img :src="logoFile" class="w-16 h-16 rounded-xl object-contain border border-slate-200 bg-white p-1" />
              <button @click="logoFile = null" class="absolute -top-2 -right-2 bg-slate-800 text-white rounded-full p-1 shadow-md hover:bg-red-500 transition-colors">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
            <label class="flex-1 flex items-center justify-center h-16 border-2 border-slate-200 border-dashed rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
              <span class="text-xs text-slate-500 font-medium">{{ logoFile ? 'Change Logo' : 'Click to upload logo' }}</span>
              <input type="file" @change="onLogoUpload" accept="image/*" class="hidden" />
            </label>
          </div>
        </section>
      </div>

      <div class="lg:col-span-5 relative">
        <div class="sticky top-28 h-[calc(100vh-12rem)] w-full flex flex-col items-center justify-center">
          
          <div ref="exportArea" class="flex flex-col items-center p-8 transition-all duration-500">
            
            <div v-if="hasFrame && frameStyle === 'bubble'" 
                 class="relative mb-6"
                 :style="{ backgroundColor: frameColor }">
              <div class="px-8 py-3 text-white font-black text-2xl rounded-2xl uppercase tracking-tight">
                {{ frameText }}
              </div>
              <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-5 rotate-45"
                   :style="{ backgroundColor: frameColor }">
              </div>
            </div>

            <div 
              class="transition-all duration-500 ease-in-out"
              :style="qrContainerStyle"
              :class="[
                 hasFrame && (frameStyle === 'border' || frameStyle === 'bubble') ? 'border-[10px]' : '',
                 hasFrame && (frameStyle === 'top' || frameStyle === 'below') ? 'p-2' : 'p-1'
              ]"
            >
               <div v-if="hasFrame && frameStyle === 'top'" class="text-center py-2 text-white font-black text-xl mb-1 uppercase tracking-tight">
                 {{ frameText }}
               </div>

               <div :class="['p-4 rounded-[1.4rem]', isTransparent ? 'bg-transparent' : 'bg-white']">
                 <div ref="qrWrapper" class="overflow-hidden"></div>
               </div>

               <div v-if="hasFrame && frameStyle === 'below'" class="text-center py-2 text-white font-black text-xl mt-1 uppercase tracking-tight">
                 {{ frameText }}
               </div>
            </div>
          </div>
<p class="mt-8 text-slate-700 text-[10px] uppercase font-bold tracking-[0.2em] flex items-center gap-2">
  <span class="relative flex h-2 w-2">
    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
    <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
  </span>
  Live Production Preview
</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import QRCodeStyling from 'qr-code-styling'
// We will use a lightweight CDN for the export logic to avoid heavy local dependencies
import * as htmlToImage from 'html-to-image';

import { useRouter } from 'vue-router'

const router = useRouter()
const qrText = ref('https://google.com')
const qrColor = ref('#1e293b')
const qrType = ref('square')
const bgColor = ref('#ffffff')
const isTransparent = ref(false)
const logoFile = ref(null)

// Frame State
const hasFrame = ref(false) // Default: No frame/border
const frameStyle = ref('bubble') 
const frameText = ref('SCAN ME')
const frameColor = ref('#1e293b')

const qrWrapper = ref(null)
const exportArea = ref(null)
let qrCode = null

const qrContainerStyle = computed(() => {
  if (!hasFrame.value) return { backgroundColor: 'transparent' }
  
  const base = {
    borderColor: frameColor.value,
    backgroundColor: frameColor.value,
    transition: 'all 0.5s ease'
  }

  // Bubble/Border styles use a transparent background with a thick border
  if (frameStyle.value === 'bubble' || frameStyle.value === 'border') {
    return { ...base, backgroundColor: 'transparent', borderRadius: '2.5rem' }
  }

  return { ...base, borderRadius: '2rem' }
})

const updateQR = () => {
  if (!qrCode) return
  qrCode.update({
    data: qrText.value || " ",
    dotsOptions: { color: qrColor.value, type: qrType.value },
    backgroundOptions: { color: isTransparent.value ? 'transparent' : bgColor.value },
    image: logoFile.value || undefined,
    imageOptions: { margin: 10, imageSize: 0.4 }
  })
}

watch([qrText, qrColor, qrType, bgColor, isTransparent, logoFile], updateQR)

const onLogoUpload = (e) => {
  const file = e.target.files[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = () => { logoFile.value = reader.result }
  reader.readAsDataURL(file)
}

/**
 * EXPORT LOGIC
 * Captures the 'exportArea' which includes the frame, label, and QR
 */
const exportFullPreview = async () => {
  if (!exportArea.value) return;
  
  try {
    const dataUrl = await htmlToImage.toPng(exportArea.value, {
      quality: 1,
      pixelRatio: 3, // High definition export
      backgroundColor: isTransparent.value ? null : '#f8fafc' // Matches page bg if not transparent
    });
    
    const link = document.createElement('a');
    link.download = `qr-studio-design-${Date.now()}.png`;
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error('Oops, export failed!', error);
    alert('Export failed. Please try again or use a modern browser.');
  }
}

onMounted(() => {
  qrCode = new QRCodeStyling({
    width: 280,
    height: 280,
    data: qrText.value,
    dotsOptions: { color: qrColor.value, type: qrType.value },
    backgroundOptions: { color: bgColor.value },
    imageOptions: { crossOrigin: 'anonymous', margin: 10, imageSize: 0.4 },
  })
  qrCode.append(qrWrapper.value)


  var getlink = localStorage.getItem("link")

  if(!getlink) {
    router.push('/') 
    return
  }
  qrText.value = getlink
})
</script>

<style scoped>
.animate-in {
  animation: fadeIn 0.4s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

/* Ensure the export area looks clean during capture */
[ref="exportArea"] {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>