import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineNuxtConfig({
  compatibilityDate: '2025-12-24',
  modules: ['@element-plus/nuxt', '@vant/nuxt', '@nuxtjs/tailwindcss'],
  // postcss配置
  postcss: {
    plugins: {
      'postcss-px-to-viewport': {
        viewportWidth: 375,
      }
    }
  }
})