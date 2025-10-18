import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/SlipScan/',    // <<— IMPORTANT for GitHub Pages
})
