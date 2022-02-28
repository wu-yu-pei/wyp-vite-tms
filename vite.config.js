import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
import { createHtmlPlugin } from 'vite-plugin-html'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      // 自动导入ref, reactive等hooks
      imports: ['vue', 'vue-router', 'vue-i18n', '@vueuse/head', '@vueuse/core'],
    }),
    Components({
      // 指定自定义组件位置，默认是src/components
      dirs: ['src/components', 'src/base-ui'],
      extensions: ['vue'],
      resolvers: [ElementPlusResolver()],
      // 配置文件生成位置
      dts: 'src/components.d.ts',
      // 搜索子目录
      deep: true,
    }),
    createHtmlPlugin({
      minify: true,
      entry: './src/main.js',
      inject: {
        data: {
          title: 'wyp-vite-tms',
        },
      },
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  server: {
    host: '0.0.0.0',
    // 配置代理
    proxy: {
      '^/api': {
        target: 'http://127.0.0.1:4523/mock/623670',
        // target: 'http://39.103.181.186:80',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
