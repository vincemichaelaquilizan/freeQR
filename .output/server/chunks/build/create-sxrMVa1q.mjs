import { ref, computed, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderList } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import 'unhead';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import '@iconify/utils';
import 'fast-xml-parser';
import 'better-sqlite3';
import 'ipx';
import '@unhead/addons';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'reka-ui';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';

const _sfc_main = {
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const qrText = ref("https://google.com");
    const qrColor = ref("#1e293b");
    const qrType = ref("square");
    const bgColor = ref("#ffffff");
    const isTransparent = ref(false);
    const logoFile = ref(null);
    const hasFrame = ref(false);
    const frameStyle = ref("bubble");
    const frameText = ref("SCAN ME");
    const frameColor = ref("#1e293b");
    ref(null);
    ref(null);
    const qrContainerStyle = computed(() => {
      if (!hasFrame.value) return { backgroundColor: "transparent" };
      const base = { borderColor: frameColor.value, backgroundColor: frameColor.value, transition: "all 0.5s ease" };
      if (frameStyle.value === "bubble" || frameStyle.value === "border") return { ...base, backgroundColor: "transparent", borderRadius: "2.5rem" };
      return { ...base, borderRadius: "2rem" };
    });
    const updateQR = () => {
      return;
    };
    watch([qrText, qrColor, qrType, bgColor, isTransparent, logoFile], updateQR);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-50 font-sans text-slate-900 pb-20" }, _attrs))} data-v-f463cd0a><header class="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center sticky top-0 z-30" data-v-f463cd0a><div class="flex items-center gap-2" data-v-f463cd0a><h1 class="text-2xl font-bold text-blue-600" data-v-f463cd0a>FreeQR</h1></div><button class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl font-semibold transition-all shadow-sm shadow-indigo-100 flex items-center gap-2" data-v-f463cd0a><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-f463cd0a><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clip-rule="evenodd" data-v-f463cd0a></path></svg> Export Design </button></header><main class="max-w-6xl mx-auto p-6 sm:p-12 grid sm:grid-cols-12 gap-12" data-v-f463cd0a><div class="sm:col-span-5 order-1 sm:order-2 relative" data-v-f463cd0a><div class="sm:sticky sm:top-28 h-auto sm:h-[calc(100vh-12rem)] w-full flex flex-col items-center justify-center" data-v-f463cd0a><div class="flex flex-col items-center p-8 transition-all duration-500" data-v-f463cd0a>`);
      if (hasFrame.value && frameStyle.value === "bubble") {
        _push(`<div class="relative mb-6" style="${ssrRenderStyle({ backgroundColor: frameColor.value })}" data-v-f463cd0a><div class="px-8 py-3 text-white font-black text-2xl rounded-2xl uppercase tracking-tight" data-v-f463cd0a>${ssrInterpolate(frameText.value)}</div><div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-5 rotate-45" style="${ssrRenderStyle({ backgroundColor: frameColor.value })}" data-v-f463cd0a></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div style="${ssrRenderStyle(qrContainerStyle.value)}" class="${ssrRenderClass([[
        hasFrame.value && (frameStyle.value === "border" || frameStyle.value === "bubble") ? "border-[10px]" : "",
        hasFrame.value && (frameStyle.value === "top" || frameStyle.value === "below") ? "p-2" : "p-1"
      ], "transition-all duration-500 ease-in-out"])}" data-v-f463cd0a>`);
      if (hasFrame.value && frameStyle.value === "top") {
        _push(`<div class="text-center py-2 text-white font-black text-xl mb-1 uppercase tracking-tight" data-v-f463cd0a>${ssrInterpolate(frameText.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass(["p-4 rounded-[1.4rem]", isTransparent.value ? "bg-transparent" : "bg-white"])}" data-v-f463cd0a><div class="overflow-hidden" data-v-f463cd0a></div></div>`);
      if (hasFrame.value && frameStyle.value === "below") {
        _push(`<div class="text-center py-2 text-white font-black text-xl mt-1 uppercase tracking-tight" data-v-f463cd0a>${ssrInterpolate(frameText.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><p class="mt-8 text-slate-700 text-[10px] uppercase font-bold tracking-[0.2em] flex items-center gap-2" data-v-f463cd0a><span class="relative flex h-2 w-2" data-v-f463cd0a><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" data-v-f463cd0a></span><span class="relative inline-flex rounded-full h-2 w-2 bg-green-500" data-v-f463cd0a></span></span> Live Production Preview </p></div></div></div><div class="sm:col-span-7 order-2 sm:order-1 space-y-6" data-v-f463cd0a><section class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200" data-v-f463cd0a><h2 class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4" data-v-f463cd0a>1. Content</h2><input${ssrRenderAttr("value", qrText.value)} type="text" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="Enter URL or text..." data-v-f463cd0a></section><section class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200" data-v-f463cd0a><h2 class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4" data-v-f463cd0a>2. Graphics &amp; Background</h2><div class="grid md:grid-cols-2 gap-6" data-v-f463cd0a><div class="space-y-4" data-v-f463cd0a><label class="text-sm font-medium text-slate-700 block" data-v-f463cd0a>Pattern Color</label><div class="flex items-center gap-3" data-v-f463cd0a><input type="color"${ssrRenderAttr("value", qrColor.value)} class="w-10 h-10 rounded-sm cursor-pointer border-none bg-transparent" data-v-f463cd0a><code class="text-xs text-slate-400 font-mono" data-v-f463cd0a>${ssrInterpolate(qrColor.value)}</code></div></div><div class="space-y-4" data-v-f463cd0a><label class="text-sm font-medium text-slate-700 block" data-v-f463cd0a>Background Settings</label><div class="flex items-center gap-4" data-v-f463cd0a><input type="color"${ssrRenderAttr("value", bgColor.value)}${ssrIncludeBooleanAttr(isTransparent.value) ? " disabled" : ""} class="w-10 h-10 rounded-sm cursor-pointer border-none bg-transparent disabled:opacity-20" data-v-f463cd0a><label class="flex items-center gap-2 cursor-pointer group" data-v-f463cd0a><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(isTransparent.value) ? ssrLooseContain(isTransparent.value, null) : isTransparent.value) ? " checked" : ""} class="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" data-v-f463cd0a><span class="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors" data-v-f463cd0a>Transparent</span></label></div></div><div class="md:col-span-2 space-y-2" data-v-f463cd0a><label class="text-sm font-medium text-slate-700" data-v-f463cd0a>Pattern Style</label><div class="flex gap-2" data-v-f463cd0a><!--[-->`);
      ssrRenderList(["square", "dots", "rounded", "extra-rounded"], (type) => {
        _push(`<button class="${ssrRenderClass([qrType.value === type ? "bg-indigo-600 text-white shadow-md" : "bg-slate-100 text-slate-600", "flex-1 py-2 text-xs font-bold rounded-sm capitalize transition-all"])}" data-v-f463cd0a>${ssrInterpolate(type)}</button>`);
      });
      _push(`<!--]--></div></div></div></section><section class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200" data-v-f463cd0a><div class="flex justify-between items-center mb-6" data-v-f463cd0a><h2 class="text-xs font-bold uppercase tracking-widest text-slate-400" data-v-f463cd0a>3. Frame Customization</h2><label class="relative inline-flex items-center cursor-pointer" data-v-f463cd0a><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(hasFrame.value) ? ssrLooseContain(hasFrame.value, null) : hasFrame.value) ? " checked" : ""} class="sr-only peer" data-v-f463cd0a><div class="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-indigo-600 after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all" data-v-f463cd0a></div></label></div>`);
      if (hasFrame.value) {
        _push(`<div class="space-y-6 animate-in" data-v-f463cd0a><div class="grid grid-cols-2 md:grid-cols-4 gap-3" data-v-f463cd0a><!--[-->`);
        ssrRenderList(["bubble", "top", "below", "border"], (style) => {
          _push(`<button class="${ssrRenderClass([frameStyle.value === style ? "border-indigo-600 bg-indigo-50 text-indigo-700" : "border-slate-100 text-slate-400", "px-4 py-3 border-2 rounded-xl text-sm font-bold capitalize transition-all"])}" data-v-f463cd0a>${ssrInterpolate(style)}</button>`);
        });
        _push(`<!--]--></div><div class="grid md:grid-cols-2 gap-6 pt-2" data-v-f463cd0a><div class="space-y-2" data-v-f463cd0a><label class="text-sm font-medium text-slate-700" data-v-f463cd0a>Label Text</label><input${ssrRenderAttr("value", frameText.value)} type="text" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-sm text-sm focus:ring-2 focus:ring-indigo-500 uppercase font-bold" data-v-f463cd0a></div><div class="space-y-2" data-v-f463cd0a><label class="text-sm font-medium text-slate-700" data-v-f463cd0a>Frame Color</label><input type="color"${ssrRenderAttr("value", frameColor.value)} class="w-full h-10 rounded-sm cursor-pointer border-none bg-transparent" data-v-f463cd0a></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200" data-v-f463cd0a><h2 class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4" data-v-f463cd0a>4. Center Logo</h2><div class="flex items-center gap-4" data-v-f463cd0a>`);
      if (logoFile.value) {
        _push(`<div class="relative" data-v-f463cd0a><img${ssrRenderAttr("src", logoFile.value)} class="w-16 h-16 rounded-xl object-contain border border-slate-200 bg-white p-1" data-v-f463cd0a><button class="absolute -top-2 -right-2 bg-slate-800 text-white rounded-full p-1 shadow-md hover:bg-red-500 transition-colors" data-v-f463cd0a><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-f463cd0a><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-f463cd0a></path></svg></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<label class="flex-1 flex items-center justify-center h-16 border-2 border-slate-200 border-dashed rounded-xl cursor-pointer hover:bg-slate-50 transition-colors" data-v-f463cd0a><span class="text-xs text-slate-500 font-medium" data-v-f463cd0a>${ssrInterpolate(logoFile.value ? "Change Logo" : "Click to upload logo")}</span><input type="file" accept="image/*" class="hidden" data-v-f463cd0a></label></div></section></div></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const create = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f463cd0a"]]);

export { create as default };
//# sourceMappingURL=create-sxrMVa1q.mjs.map
