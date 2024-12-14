// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Spécifier le dossier de sortie
    outDir: 'dist',
    assetsDir: '',
    manifest: true,
    rollupOptions: {
      input: './src/main.jsx'
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true
      }
    }
  }
})