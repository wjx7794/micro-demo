import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// 注册微前端
import './register';
// qiankun 通信
import './communication';

createApp(App).use(router).mount('#app');
