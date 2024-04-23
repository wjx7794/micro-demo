import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 注册微前端
import './register';
// qiankun 通信
import './communication';
import './seperate';

createApp(App).use(router).use(store).mount('#app');
