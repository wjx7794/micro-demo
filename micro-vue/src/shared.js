class Shared {
  /**
   * 获取 num
   */
  getNum() {
    // 子应用独立运行时，在 localStorage 中获取 num
    return localStorage.getItem('num') || '';
  }

  /**
   * 设置 num
   */
  setNum(num) {
    // 子应用独立运行时，在 localStorage 中设置 num
    localStorage.setItem('num', num);
  }
}

class SharedModule {
  static shared = new Shared();

  /**
   * 重载 shared
   */
  static overloadShared(shared) {
    SharedModule.shared = shared;
  }

  /**
   * 获取 shared 实例
   */
  static getShared() {
    return SharedModule.shared;
  }
}

export default SharedModule;
