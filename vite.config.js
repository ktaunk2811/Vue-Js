import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),tailwindcss()],
  server:{
    port: 3000,
    proxy:{
      '/api':{
        target: 'http://localhost:5000',
        changeOrigin:true,
        rewrite:(path)=>  path.replace(/^\/api/, ''),
      }
    }
  },
  
})
