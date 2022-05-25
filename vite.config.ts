/*
 * @Author: dream 1012377328@qq.com
 * @Date: 2022-05-25 21:33:53
 * @LastEditors: dream 1012377328@qq.com
 * @LastEditTime: 2022-05-25 21:35:57
 * @FilePath: \vite-vue3-ts-admin\vite.config.ts
 * @Description:
 *
 * Copyright (c) 2022 by dream 1012377328@qq.com, All Rights Reserved.
 */
import { resolve } from 'path';
import { defineConfig, UserConfig, ServerOptions } from 'vite';
import getPluginsList from './build/vite/plugins';

// 使用node转换路径
const pathResolve = (dir: string): string => {
    return resolve(__dirname, '.', dir);
};

// 路径别名
const alias: Record<string, string> = {
    '/@': pathResolve('src'),
    // '/#': pathResolve('build'),
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
            extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
        },
        // 插件列表
        plugins: getPluginsList(),
        // 开发服务器配置
        server,
    };
});
