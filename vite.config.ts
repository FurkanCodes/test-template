import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr' // Corrected import for Vite

export default defineConfig({
  plugins: [react(), svgr()], // Corrected order
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/_mantine";`,
      },
    },
  },
  resolve: {
    alias: {
      src: '/src',
    },
  },
})
