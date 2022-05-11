import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

const app = createApp(App);

// 挂载pinia
app.use(store).use(router);
// 挂载实例
app.mount('#app');
