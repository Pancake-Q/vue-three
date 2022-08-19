import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  /**
   * 必须是函数，因为容器要兼容ssr服务端渲染，避免多个请求交叉污染
   * 必须是箭头函数，为了ts类型推断
   */
  state: () => {
    return {
      count: 0,
    };
  },
  getters: {
    // 可以使用this.state,但必须手动标记返回值类型
    count2(state) {
      return state.count * 2;
    },
  },
  // 同步异步都支持
  actions: {},
});
