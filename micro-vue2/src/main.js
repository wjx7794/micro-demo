import Vue from 'vue';
import VueRouter from 'vue-router';

import './public-path';
import App from './App.vue';
import routes from './router/index';

Vue.use(VueRouter);
Vue.config.productionTip = false;

let instance = null;
let router = null;

/**
 * 「渲染函数」运行场景:
 * 1. 主应用生命周期钩子中运行
 * 2. 微应用单独启动时运行
 */
function render(props) {
  const { container } = props || {};
  // 在 render 中创建 VueRouter，可以保证在卸载微应用时，移除 location 事件监听，防止事件污染
  router = new VueRouter({
    // 运行在主应用中时，添加路由命名空间 /vue
    base: window.__POWERED_BY_QIANKUN__ ? '/vue2' : '/',
    mode: 'history',
    routes,
  });

  // 挂载应用
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时，直接挂载应用
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

/**-------------------- 生命周期 start --------------------*/
/**
 * 1. bootstrap
 * 时机: 只会在微应用初始化时调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap
 * 应用: 在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等
 */
export async function bootstrap() {
  console.log('🔥vue2 bootstraped>>>');
}

/**
 * 2. mount
 * 时机: 应用每次「进入」都会调用 mount 方法
 * 应用: 在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log('🔥vue2 mount>>>', props);
  render(props);
}

/**
 * 3. unmount
 * 时机: 应用每次「切出/卸载」会调用的方法
 * 应用: 在这里会卸载微应用的应用实例
 */
export async function unmount() {
  console.log('🔥vue2 unmount>>>');
  instance.$destroy();
  instance = null;
  router = null;
}
