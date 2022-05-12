import { createRouter, createWebHistory } from 'vue-router';
import routes from './staticRouter';
import interceptor from './interceptor';

const router = createRouter({
    history: createWebHistory(),
    routes,
});
// 路由拦截器

interceptor(router);

export default router;
