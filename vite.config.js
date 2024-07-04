import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
    preprocessorOptions: {
      // Add an explicit import for Swiper CSS
      scss: {
        additionalData: `@import 'swiper/swiper-bundle.min.css';`,
      },
    },
  },
})
