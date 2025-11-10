import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// ⚙️ Configuração do Vite para extensão do Owlbear Rodeo
export default defineConfig({
  plugins: [vue()],
  // 👇 Caminho base para o GitHub Pages
  // Use o mesmo nome do repositório
  base: '/one-sheet/',
  build: {
    outDir: 'dist',
    assetsDir: '.', // mantém os assets na mesma pasta do index.html
    emptyOutDir: true,
  },
  server: {
    host: true, // permite acessar pelo IP local
    port: 5173,
    cors: {
      origin: 'https://www.owlbear.rodeo', // permite que o Owlbear acesse sua extensão
    },
  },
})
