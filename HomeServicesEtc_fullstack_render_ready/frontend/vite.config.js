import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// CommonJS-compatible export
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    target: 'esnext'
  }
})
