/*
 * @Author: dream 1012377328@qq.com
 * @Date: 2022-05-25 20:19:54
 * @LastEditors: dream 1012377328@qq.com
 * @LastEditTime: 2022-05-25 21:35:13
 * @FilePath: \vite-vue3-ts-admin\build\vite\plugins.ts
 * @Description:
 *
 * Copyright (c) 2022 by dream 1012377328@qq.com, All Rights Reserved.
 */
/**
 * @file vite配置列表
 */

import { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import Unocss from 'unocss/vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

export default function getPluginsList(): PluginOption[] {
    const pluginList = [
        vue({
            // 开启实验性质的响应性语法糖
            reactivityTransform: true,
        }),
        Unocss(),
        Components({
            /* options */
            resolvers: [NaiveUiResolver()],
            // 自定义全局声明文件的目录
            dts: 'types/components.d.ts',
        }),
    ];
    return pluginList;
}
