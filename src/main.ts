import { createApp } from 'vue';

import 'uno.css';
import '@unocss/reset/tailwind.css';

import App from './App.vue';
import store from './store';
import router from './router';

const meta = document.createElement('meta');
meta.name = 'naive-ui-style';
document.head.appendChild(meta);

const app = createApp(App);

// 挂载pinia
app.use(store).use(router);
// 挂载实例
app.mount('#app');
