import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import { routes } from './router/index';
import './public-path';
import actions from './actions.js';

let router = null;
let instance = null;
let history = null;

const app = createApp(App);
/**
 * 「渲染函数」运行场景:
 * 1. 主应用生命周期钩子中运行
 * 2. 微应用单独启动时运行
 */
function render(props = {}) {
  // 注入 actions 实例
  actions.setActions(props);

  const { container } = props;

  history = createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/vue3' : '/');
  router = createRouter({
    history,
    routes,
  });

  instance = createApp(App);
  instance.use(router);
  instance.mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

/**-------------------- 生命周期 start --------------------*/
/**
 * 1. bootstrap
 * 时机: 只会在微应用初始化时调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap
 * 应用: 在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等
 */
export async function bootstrap() {
  console.log('🔥vue3 bootstrap>>>');
}

/**
 * 2. mount
 * 时机: 应用每次「进入」都会调用 mount 方法
 * 应用: 在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log('🔥vue3 mount>>>', props);
  render(props);
}

/**
 * 3. unmount
 * 时机: 应用每次「切出/卸载」会调用的方法
 * 应用: 在这里会卸载微应用的应用实例
 */
export async function unmount(props) {
  console.log('🔥vue3 unmount>>>', props);
  app.unmount();
  instance = null;
  router = null;
}

/**
 * 4. update
 * 时机: 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log('🔥vue3 update>>>', props);
}
/**-------------------- 生命周期 end --------------------*/
