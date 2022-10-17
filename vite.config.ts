import { defineConfig, splitVendorChunkPlugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { viteMockServe } from 'vite-plugin-mock';
import test from './build/testPlugin.js';
const framework = () => {
  return [vue(), viteMockServe({}), splitVendorChunkPlugin(), test()];
};

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname) || process.cwd(),
  plugins: framework(),
  // cacheDir: './.cache',
  // publicDir: path.resolve(__dirname, 'public'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.ts', '.js'],
  },
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, './index.html'),
    },
    cssCodeSplit: true,
  },
  server: {
    port: 8080, //启动端口
    hmr: {
      host: '127.0.0.1',
      port: 8080,
    },
    // 设置 https 代理
    proxy: {
      '/api': {
        target: 'your https address',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
    },
  },
});
