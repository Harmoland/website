import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import Font from 'vite-plugin-font'

// https://cn.vitejs.dev/config/
export default defineConfig({
  plugins: [
    Font.vite({
      scanFiles: {
        // ?subsets 将会匹配 default
        default: ['docs/**/*.{json,js,jsx,ts,tsx,vue,md}']
      },
      css: {
        fontWeight: false
      }
    }),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    }),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'brotliCompress',
      ext: '.br'
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern'
      }
    }
  }
})
