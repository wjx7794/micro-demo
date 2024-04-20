import store from './store';

class Shared {
  /**
   * 获取 Num
   */
  getNum() {
    return store.state.num;
  }

  /**
   * 设置 Num
   */
  setNum(val) {
    store.commit('increment', val);
  }

  /**
   * 动态监听mutation
   */
  watchNum(callback) {
    // 订阅 store 的 mutation
    store.subscribe((_, state) => {
      callback && callback(state?.num);
    });
  }
}

const shared = new Shared();
export default shared;
