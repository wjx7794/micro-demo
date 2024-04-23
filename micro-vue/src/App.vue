<template>
  <div id="app" class="child">
    <!-- 通信 start -->
    <button @click="reset" style="margin-right: 10px">重置为0</button>
    <span id="token">{{ token }}</span>
    <!-- 通信 end -->

    <!-- shared start -->
    <div style="margin-top: 10px">
      <button @click="addNum">子应用请求增加num</button>
      num: {{ num }}
    </div>
    <!-- shared end -->

    <div id="nav">
      <router-link to="/">vue3-Home</router-link> |
      <router-link to="/other">vue3-other</router-link> |
      <router-link to="/about">vue3-About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import actions from './actions.js';
import SharedModule from './shared';

export default {
  data() {
    return {
      token: null,
      num: null,
      sharedInstance: null,
    };
  },
  mounted() {
    const sharedInstance = SharedModule.getShared();
    this.num = sharedInstance.getNum();
    this.sharedInstance = sharedInstance;
    sharedInstance.watchNum((value) => {
      this.num = value;
    });

    /**
     * 注册观察者函数
     * 1. onGlobalStateChange 第二个参数为 true，表示立即执行一次观察者函数
     * 2. state: 变更后的状态; prevState: 变更前的状态
     */
    actions.onGlobalStateChange((state, prevState) => {
      console.log('🌟[子应用观察者]：old token ->', prevState);
      console.log('🌟[子应用观察者]：new token ->', state);

      // 获取用户信息
      this.token = state.token;
    }, true);
  },
  methods: {
    reset() {
      actions.setGlobalState({
        origin: 'vue3App',
        type: 'micro',
        token: 'Token0',
      });
    },
    // shared
    addNum() {
      this.sharedInstance.setNum(10);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#token {
  font-weight: 500;
  color: red;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
