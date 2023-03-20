import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // optimizeDeps:{
  //   //在预构建中，强制排除某预构建项
  //   exclude:['lodash-es']
  // }
})
