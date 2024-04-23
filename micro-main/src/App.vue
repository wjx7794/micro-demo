<template>
  <div id="app">
    <!-- 通信 start -->
    <button @click="login" style="margin-right: 10px">登陆</button>
    <button @click="exit" style="margin-right: 10px">退出登陆</button>
    <span>{{ token }}</span>
    <!-- 通信 end -->

    <!-- shared start -->
    <div @click="addNum" style="margin-top: 10px">
      <button>增加num</button>
      num: {{ $store.state.num }}
    </div>
    <!-- shared end -->

    <div id="nav">
      <router-link to="/">主应用-Home</router-link> |
      <router-link to="/about">主应用-About</router-link> |
      <router-link to="/other">主应用-Other</router-link> |
      <router-link to="/react">子应用-React</router-link> |
      <router-link to="/vue3">子应用-Vue3</router-link> |
      <router-link to="/vue2">子应用-Vue2</router-link> |
    </div>

    <!-- 主应用路由渲染入口 -->
    <router-view />
    <!-- 子应用渲染的入口 -->
    <div id="subapp-container"></div>
  </div>
</template>

<script>
import actions from './communication';

export default {
  mounted() {
    /**
     * 注册一个观察者函数
     * 1. state: 变更后的状态
     * 2. prevState: 变更前的状态
     */
    actions.onGlobalStateChange((state, prevState) => {
      console.log('🌟[主应用观察者]：old ->', prevState);
      console.log('🌟[主应用观察者]：new ->', state);
      // 主应用发起 update
      if (state.type === 'main') {
        this.token = state.token;
      }
      // 子应用发起 update
      if (state.type === 'micro') {
        this.token = state.token;
        this.count = 1;
      }
    });
  },
  data() {
    return {
      token: null,
      count: 1,
    };
  },
  methods: {
    // 主应用登录，设置 token
    login() {
      const token = 'TOKEN' + this.count++;
      actions.setGlobalState({
        origin: 'main',
        type: 'main',
        token,
      });
    },
    // 主应用退出登录，清空 token
    exit() {
      actions.setGlobalState({
        origin: 'main',
        type: 'main',
        token: null,
      });
      this.count = 1;
    },
    // shared
    addNum() {
      // 提交一个变更
      this.$store.commit('increment', 10);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#subapp-container {
  background-color: #ececec;
}

.child {
  background-color: #ccc;
  border: 1px solid red;
}
</style>
