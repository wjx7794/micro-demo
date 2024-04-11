import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import './public-path';

let root = null;
/**
 * 「渲染函数」运行场景:
 * 1. 主应用生命周期钩子中运行
 * 2. 微应用单独启动时运行
 */
function render(props) {
  const { container } = props;
  console.log(document, container);
  root =
    root ||
    ReactDOM.createRoot(
      container
        ? container.querySelector('#root')
        : document.getElementById('root')
    );
  root.render(
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/react' : '/'}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  );
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
  console.log('🔥[react18] react app bootstraped>>>');
}

/**
 * 2. mount
 * 时机: 应用每次「进入」都会调用 mount 方法
 * 应用: 在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log('🔥[react18] props from main framework>>>', props);
  render(props);
}

/**
 * 3. unmount
 * 时机: 应用每次「切出/卸载」会调用的方法
 * 应用: 在这里会卸载微应用的应用实例
 */
export async function unmount(props) {
  root.unmount();
  root = null;
}
/**-------------------- 生命周期 end --------------------*/
reportWebVitals();
