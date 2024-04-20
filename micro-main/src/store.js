import { createStore } from 'vuex';

// 创建一个新的 store 实例
const store = createStore({
  state() {
    return {
      num: 0,
    };
  },
  mutations: {
    increment(state, n) {
      state.num += n;
    },
  },
});

export default store;
