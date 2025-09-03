import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.ENV._VITE_BASE_PATH || '/teste-de-estagio',
})
