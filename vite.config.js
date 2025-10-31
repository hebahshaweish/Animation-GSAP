import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  /* add manually */

// https://vite.dev/config/
export default defineConfig({
    base: '/Animation-GSAP/',
  plugins: [react(), tailwindcss()],  //  /* add manually */
})
