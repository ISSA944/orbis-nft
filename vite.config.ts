import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('@splinetool')) return 'spline'
          if (id.includes('AboutSection')) return 'about'
          if (id.includes('GridSection')) return 'grid'
          if (id.includes('CTASection')) return 'cta'
        },
      },
    },
  },
})
