import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'

const basePath = process.env.VITE_BASE_PATH || '/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: basePath,
})
