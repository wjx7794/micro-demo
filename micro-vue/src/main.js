import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import { routes } from './router/index';
import './public-path';

let router = null;
let instance = null;
let history = null;

const app = createApp(App);
function render(props = {}) {
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

/**
 * bootstrap ： 在微应用初始化的时候调用一次，之后的生命周期里不再调用
 */
export async function bootstrap() {
  console.log('vue3 bootstrap>>>');
}

/**
 * 应用每次「进入」都会调用 mount 方法
 * - 通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log('vue3 mount>>>', props);
  render(props);
}

/**
 * 应用每次「切出/卸载」会调用的方法
 * - 通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  console.log('vue3 unmount>>>');
  app.unmount();
  instance = null;
  router = null;
}
