import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  //base: '/wp-content/themes/twentytwentyone/toukentemplate/',
  plugins: [react()],
})
