import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/barros-team-site/',
  plugins: [react()],
})
