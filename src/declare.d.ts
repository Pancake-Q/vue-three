/// <reference types="vite/client" />
// declare module './src/store/store.js' // declare module 'xxx'路径或者模块名
declare module '@vitejs/plugin-vue';

// ts 环境vue声明模块
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
