import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('AboutSection')) return 'about'
          if (id.includes('GridSection')) return 'grid'
          if (id.includes('CTASection')) return 'cta'
        },
      },
    },
  },
})
