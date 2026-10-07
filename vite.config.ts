import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Relative base so the build works both at a user site root and under a project path.
export default defineConfig({
  base: './',
  plugins: [react()],
})
