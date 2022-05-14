import 'vue-router';
declare module 'vue-router' {
    interface RouteMeta {
        /**
         * @param authority 权限
         */
        authority?: string[];
        /**
         * @param title 页面名称
         */
        title: string;
        /**
         * @param i18n 是否翻译
         */
        i18n?: boolean;
        /**
         * @param keepAlive 是否缓存
         */
        keepAlive?: boolean;
        /**
         * @param refreshRedirect 刷新后重定向页面
         */
        refreshRedirect?: string;
        /**
         * @param dynamicLevel 动态路由层级
         */
        dynamicLevel?: string;
        /**
         * @param icon 图标
         */
        icon?: string;
        /**
         * @param rank 路由顺序
         */
        rank?: number;
        /**
         * @param showLink 是否在菜单中显示（可不写，默认true）
         */
        showLink?: boolean;
        /**
         * @param alwaysShow 是否一直显示根路由
         */
        alwaysShow?: boolean;
        /**
         * @param hidden 是否隐藏
         */
        hidden?: boolean;
        /**
         * @param breadcrumb 是否在面包屑显示
         */
        breadcrumb?: boolean;
        /**
         * @param activeMenu 选中的菜单栏，用于页面隐藏时的显示
         */
        activeMenu?: string;
        /**
         * @param extraIcon 菜单名称右侧的额外图标，支持fontawesome、iconfont、element-plus-icon
         */
        extraIcon?: {
            svg?: boolean;
            name?: string;
        };
    }
}
