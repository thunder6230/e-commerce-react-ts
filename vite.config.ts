import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    rollupOptions:{
      output:{
        assetFileNames: "[name].[ext]",
        chunkFileNames: "[name].js",
        entryFileNames:  "[name].js"
      }
    }
  },
  server: {
    port: 3000
  }
})
