<template>
  <div class="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 to-slate-100 flex flex-col font-sans">
    <nav class="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
      <div class="container mx-auto flex items-center justify-between py-4 px-6">
        <div class="flex items-center gap-2">
      <div class="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
  <img src="/image/icon.png" alt="Icon" class="w-8 h-8" />
</div>

          <h1 class="text-xl font-bold tracking-tight text-slate-900">FreeQR</h1>
        </div>
        <a href="https://ko-fi.com/yuzukikouta58722/goal?g=15" class="px-5 py-2 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-blue-600 transition-all shadow-lg shadow-blue-200">
          Buy me a coffee ☕
        </a>
      </div>
    </nav>

    <section class="container mx-auto text-center pt-20 pb-12 px-4">
      <div class="flex justify-center mb-6">
        <p class="flex items-center gap-2 text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em] bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Live Production Preview
        </p>
      </div>

      <h2 class="text-5xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight">
        Zero Friction. <span class="text-blue-600">Pure QR.</span>
      </h2>
      <p class="text-slate-600 mb-10 text-lg max-w-xl mx-auto leading-relaxed">
        No accounts. No credit cards. No "Wait 5 seconds for your download." Just paste your link and grab your code.
      </p>

      <div class="max-w-2xl mx-auto bg-white p-2 rounded-3xl shadow-2xl shadow-blue-100 border border-white">
        <div class="flex flex-col md:flex-row gap-2">
          <input
            v-model="qrText"
            type="text"
            placeholder="https://your-awesome-link.com"
            class="flex-1 px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500 text-slate-900 placeholder:text-slate-400"
          />
          <button
            @click="generateQR"
            class="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-blue-200"
          >
            Generate Now
          </button>
        </div>
      </div>

      <div v-if="qrImage" class="mt-12 transition-all animate-in fade-in zoom-in duration-500">
        <div class="inline-block p-6 bg-white rounded-3xl shadow-xl border border-slate-100">
          <img :src="qrImage" alt="QR Code" class="w-48 h-48 mx-auto rounded-lg" />
          <button
            @click="downloadQR"
            class="mt-6 w-full px-6 py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition shadow-lg shadow-green-100 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="抱歉，这里应该是下载图标代码" />
            </svg>
            Download PNG
          </button>
        </div>
      </div>
    </section>

    <section class="container mx-auto py-16 px-4">
      <div class="bg-blue-200 rounded-[2rem] p-8 md:p-12 overflow-hidden relative">
        <div class="relative z-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 class="text-3xl font-bold mb-4">Why is this free?</h3>
            <p class="text-lg mb-6">
              Because it's a QR code, not rocket science. We don't need your email, your mother's maiden name, or a 7-day trial to turn text into a bunch of squares.
            </p>
            <ul class="space-y-3">
              <li class="flex items-center gap-2">✅ <strong>No Login:</strong> We don't even know who you are.</li>
              <li class="flex items-center gap-2">✅ <strong>No Limits:</strong> Generate 1 or 1,000.</li>
              <li class="flex items-center gap-2">✅ <strong>Permanent:</strong> Our codes don't "expire."</li>
            </ul>
          </div>
          <div class="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
            <p class="italic ">"I just wanted a menu QR code, not a relationship with a marketing platform."</p>
            <p class="mt-4 font-bold">— Every user ever.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="container mx-auto py-20 px-4 max-w-3xl">
      <h3 class="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h3>
      <div class="space-y-6">
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p class="font-bold text-slate-900">Do these QR codes expire?</p>
          <p class="text-slate-600 mt-2">No. They are static codes. They will work until the internet dies or the sun consumes the earth—whichever comes first.</p>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p class="font-bold text-slate-900">Why don't I have to sign up?</p>
          <p class="text-slate-600 mt-2">Because we value your time more than we value having a database full of "user_69420@gmail.com" accounts that nobody ever looks at.</p>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p class="font-bold text-slate-900">Is there a "Pro" version?</p>
          <p class="text-slate-600 mt-2">Yes. It's the same as this version, but you voluntarily send us $5 because you're a legend. The features remain exactly the same.</p>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p class="font-bold text-slate-900">Will you sell my data?</p>
          <p class="text-slate-600 mt-2">What data? We don't even know what color your socks are. We track absolutely nothing.</p>
        </div>
      </div>
    </section>

    <footer class="mt-auto bg-white py-10 border-t border-slate-100">
      <div class="container mx-auto text-center">
        <p class="text-slate-500 font-medium">© 2026 FreeQR — Built for humans, not for lead magnets.</p>
      </div>
    </footer>
  </div>
</template>


<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const qrText = ref('')

function generateQR() {
  if (!qrText.value.trim()) {
    alert('Input cannot be empty!')
    return
  }
    localStorage.setItem("link",qrText.value)
    router.push('/create') 
}
</script>