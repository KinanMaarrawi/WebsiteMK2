import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  optimizeDeps: {
    include: [
      'react-fast-marquee',
      'react-icons/fa',
      'react-icons/md',
      'react-icons/io5'
    ]
  }
})
