<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">主应用-Home</router-link> |
      <router-link to="/about">主应用-About</router-link> |
      <router-link to="/other">主应用-Other</router-link> |
      <router-link to="/app-react">子应用-React</router-link> |
      <router-link to="/vue3">子应用-Vue3</router-link> |
      <router-link to="/vue2">子应用-Vue2</router-link> |
    </div>

    <!-- 主应用路由渲染入口 -->
    <router-view />
    <!-- 子应用渲染的入口 -->
    <div id="subapp-container"></div>
  </div>
</template>

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
</style>
