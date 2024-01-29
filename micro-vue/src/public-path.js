/**
 * 子工程懒加载出现ChunkLoadError: Loading chunk 0 failed的错误
 * 去查看: https://www.cnblogs.com/zjxlicheng/p/15251284.html
 */

import * as config from '../vue.config'; //获取devServer 的配置 便于统一
console.log('config>>>', config);
(function () {
  if (window.__POWERED_BY_QIANKUN__) {
    //__POWERED_BY_QIANKUN__ 使用qiankun 初始化的属性
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line
      __webpack_public_path__ = `//localhost:${config.devServer.port}/`;
      return;
    }
    // eslint-disable-next-line
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  }
})();
