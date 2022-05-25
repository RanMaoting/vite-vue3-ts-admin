/*
 * @Author: dream 1012377328@qq.com
 * @Date: 2022-05-25 20:19:54
 * @LastEditors: dream 1012377328@qq.com
 * @LastEditTime: 2022-05-25 20:39:00
 * @FilePath: \vite-vue3-ts-admin\src\main.ts
 * @Description:
 *
 * Copyright (c) 2022 by dream 1012377328@qq.com, All Rights Reserved.
 */
import { createApp } from 'vue';

import '@unocss/reset/tailwind.css';
import 'uno.css';

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
