import { Router } from 'vue-router';
import { useUserstoreHook } from '/@/store/module/user';

const whiteList = [];

export default function interceptor(router: Router) {
    const userStore = useUserstoreHook();
    router.beforeEach((to, form, next) => {
        if (userStore.accessToken) {
            next();
        } else {
            if (to.path !== '/login') {
                if (whiteList.indexOf(to.path) !== -1) {
                    next();
                } else {
                    next({ path: '/login' });
                }
            } else {
                next();
            }
        }
    });
}
