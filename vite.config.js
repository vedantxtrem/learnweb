import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({ 
  server: {
    port: 3005, 
  },
  plugins: [react()],
})
