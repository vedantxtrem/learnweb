import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({ 
  server: {
    port: 3000, // Replace 3000 with your desired port number
  },
  plugins: [react()],
})
