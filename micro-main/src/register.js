import { registerMicroApps, start } from 'qiankun';
import shared from './shared';

// 1. 配置微应用
const apps = [
  {
    name: 'reactApp',
    entry: '//localhost:8082',
    container: '#subapp-container',
    activeRule: '/react',
  },
  {
    name: 'vue3App',
    entry: '//localhost:10000',
    container: '#subapp-container',
    activeRule: '/vue3',
    props: {
      // 通过 props 将 shared 传递给子应用
      shared,
    },
  },
  {
    name: 'vue2App',
    entry: '//localhost:10200',
    container: '#subapp-container',
    activeRule: '/vue2',
  },
];

// 2. 注册微应用
registerMicroApps(apps, {
  // qiankun 生命周期钩子 - 加载前
  beforeLoad: (app) => {
    console.log('beforeLoad>>>', app.name);
    return Promise.resolve();
  },
  // qiankun 生命周期钩子 - 挂载后
  afterMount: (app) => {
    console.log('afterMount>>>', app.name);
    return Promise.resolve();
  },
});

// 3. 启动qiankun
// start();
start({
  sandbox: {
    strictStyleIsolation: true, // 严格沙箱模式
    experimentalStyleIsolation: true,
  },
});
