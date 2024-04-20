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
}

const shared = new Shared();
export default shared;
