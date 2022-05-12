/**
 * @file vite配置列表
 */

import { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import Unocss from 'unocss/vite';

export default function getPluginsList(): PluginOption[] {
    return [
        vue({
            // 开启是实验性质的响应性语法糖
            reactivityTransform: true,
        }),
        Unocss(),
    ];
}
