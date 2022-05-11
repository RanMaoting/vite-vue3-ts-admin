module.exports = {
    // 设置我们的运行环境为浏览器 + es2021 + node ,否则eslint在遇到 Promise，window等全局对象时会报错
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    globals: {
        // Ref sugar (take 2)
        $: 'readonly',
        $$: 'readonly',
        $ref: 'readonly',
        $shallowRef: 'readonly',
        $computed: 'readonly',

        // index.d.ts
        // global.d.ts
        Fn: 'readonly',
        PromiseFn: 'readonly',
        RefType: 'readonly',
        LabelValueOptions: 'readonly',
        EmitType: 'readonly',
        TargetContext: 'readonly',
        ComponentElRef: 'readonly',
        ComponentRef: 'readonly',
        ElRef: 'readonly',
        global: 'readonly',
        ForDataType: 'readonly',
        ComponentRoutes: 'readonly',

        // script setup
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
    },
    // 继承eslint推荐的规则集，vue基本的规则集，typescript的规则集
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    // 解析vue文件
    parser: 'vue-eslint-parser',
    // 支持ts的最新语法
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    // 添加vue和@typescript-eslint插件，增强eslint的能力
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        'vue/no-v-html': 'off',
        'vue/require-default-prop': 'off',
        'vue/require-explicit-emits': 'off',
        'vue/multi-word-component-names': 'off',
        '@typescript-eslint/no-explicit-any': 'off', // any
        'no-debugger': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off', // setup()
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            },
        ],
        'no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            },
        ],
        'prettier/prettier': 2, // 这项配置 对于不符合prettier规范的写法，eslint会提示报错
        // eslint-disable-next-line no-dupe-keys
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
};
