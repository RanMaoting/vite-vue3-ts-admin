import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

const app = createApp(App);

// 挂载pinia
app.use(store);
// 挂载实例
app.mount('#app');
