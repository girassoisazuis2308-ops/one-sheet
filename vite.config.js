import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// ⚙️ Configuração do Vite para extensão do Owlbear Rodeo
export default defineConfig({
  plugins: [vue()],

  // 👇 Caminho base — Render usa '/' e GitHub Pages usa '/one-sheet/'
  base: process.env.RENDER ? '/' : '/one-sheet/',

  build: {
    outDir: 'dist',
    assetsDir: '.', // mantém os assets junto ao index.html
    emptyOutDir: true,
  },

  server: {
    host: true, // permite acesso pelo IP local (ex: 192.168.x.x)
    port: 5173,
    cors: {
      origin: '*', // libera para testes locais e o domínio do Owlbear
    },
  },
})
