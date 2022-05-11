import { resolve } from 'path';
import { defineConfig, UserConfig, ServerOptions } from 'vite';
import getPluginsList from './build/plugins';

// 使用node转换路径
const pathResolve = (dir: string): string => {
    return resolve(__dirname, '.', dir);
};

// 路径别名
const alias: Record<string, string> = {
    '/@/': pathResolve('src'),
    '/#/': pathResolve('build'),
};
// 开发服务器
const server: ServerOptions = {
    host: true,
    port: 4396,
};

// https://vitejs.dev/config/
export default defineConfig((): UserConfig => {
    return {
        resolve: {
            // 别名
            alias,
        },
        // 插件列表
        plugins: getPluginsList(),
        // 开发服务器配置
        server,
    };
});
