import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  },
  server: {
    // open: true
    https: false,
    proxy: {
      'api': {
        target: 'http://10.8.21.158:8888',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\api/,'')
      }
    }
  }
})