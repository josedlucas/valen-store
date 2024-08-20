import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
                'resources/argon/scss/argon-dashboard.scss',
                'resources/argon/css/nucleo-icons.css',
                'resources/argon/css/nucleo-svg.css',
                'resources/valenweb/scss/bootstrap-valen.scss',
                'resources/valenweb/scss/style.scss',
            ],
            // reactivityTransform: true,
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    // build: {
    //     chunkSizeWarningLimit: 1600,
    // },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
            '@': path.resolve(__dirname, './resources/js'),
        },
    }
});
