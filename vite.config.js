import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["mixed-decls", "color-functions", "global-builtin", "import"],
        // 👇 Agrega esto para que Vite resuelva las rutas de node_modules
        includePaths: [
          resolve(__dirname, 'node_modules'),
          resolve(__dirname, 'src/scss')
        ]
      },
    },
  },
  // 👇 También puedes agregar aliases para mayor claridad
  resolve: {
    alias: {
      '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
      '~fontawesome': resolve(__dirname, 'node_modules/@fortawesome/fontawesome-free')
    }
  }
})