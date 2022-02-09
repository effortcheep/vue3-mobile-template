import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import'
import viteCompression from 'vite-plugin-compression'
import importToCDN from 'vite-plugin-cdn-import'

import vueJsx from '@vitejs/plugin-vue-jsx'
import WindiCSS from 'vite-plugin-windicss'
import Pages from 'vite-plugin-pages'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vant css 自动引入
    styleImport({
      resolves: [VantResolve()],
    }),
    // 引入 CDN
    importToCDN({
      modules: [
        {
          name: 'vue',
          var: 'Vue',
          path: 'https://unpkg.com/vue@next',
        },
        {
          name: 'vant',
          var: 'vant',
          path: 'https://cdn.bootcdn.net/ajax/libs/vant/3.4.1/vant.min.js',
          css: 'https://cdn.bootcdn.net/ajax/libs/vant/3.4.1/index.min.css',
        },
      ],
    }),
    // windicss
    WindiCSS(),

    // 文件路由
    Pages({
      dirs: 'src/views',
      exclude: ['**/components/*.vue'],
      extensions: ['vue', 'md', 'tsx'],
    }),

    vueJsx(),

    // gzip 压缩
    viteCompression(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_debugger: true,
      },
    },
  },
})
