function emptyAction() {
  // 警告：提示当前使用的是空 Action
  console.warn('Current execute action is empty!');
}

class Actions {
  // 默认值为空 Action
  actions = {
    onGlobalStateChange: emptyAction,
    setGlobalState: emptyAction,
    offGlobalStateChange: emptyAction,
  };

  /**
   * 初始化 actions
   */
  setActions(actions) {
    this.actions = actions;
  }

  /**
   * 监听
   */
  onGlobalStateChange(...args) {
    return this.actions.onGlobalStateChange(...args);
  }

  /**
   * 设置
   */
  setGlobalState(...args) {
    return this.actions.setGlobalState(...args);
  }
}

const actions = new Actions();

export default actions;
