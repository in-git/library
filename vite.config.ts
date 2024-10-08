import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import { codeInspectorPlugin } from 'code-inspector-plugin';
import tailwindcss from 'tailwindcss';
import AutoImport from 'unplugin-auto-import/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import OptimizationPersist from 'vite-plugin-optimize-persist';
import PkgConfig from 'vite-plugin-package-config';

/* 配置信息 */
export default defineConfig(() => {
  return {
    base: '/',
    plugins: [
      PkgConfig(),
      OptimizationPersist(),
      vue(),
      codeInspectorPlugin({
        bundler: 'vite',
      }),
      AutoImport({
        dts: 'src/auto-imports.d.ts',
        imports: ['vue', 'vue-router'],
        eslintrc: {
          enabled: true,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true,
        },
      }),
      Components({
        dts: 'src/components.d.ts',
        deep: true,
        dirs: ['src/components'],
        extensions: ['vue', 'tsx'],
        resolvers: [
          AntDesignVueResolver({
            importStyle: false,
            resolveIcons: true,
          }),
        ],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: {},
        },
      },
      loaderOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      } as any,
    },
    optimizeDeps: {
      include: ['@ant-design/icons-vue', 'ant-design-vue', 'vue-use'],
    },
    server: {
      /* 是否自动打开，在linux上运行请关闭，否则会报错 */
      open: true,
      port: 4567,
    },
    build: {},
  };
});
