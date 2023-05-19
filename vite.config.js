import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://jeacevedo9.github.io/react-ghactions/',
  plugins: [react()],
})
