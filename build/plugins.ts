/**
 * @file vite配置列表
 */

import { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import Unocss from 'unocss/vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

export default function getPluginsList(): PluginOption[] {
    return [
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
}
