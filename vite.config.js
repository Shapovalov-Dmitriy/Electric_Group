import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export default defineConfig(({ mode }) => {
  // npm run build      → обычный build с хешами (статика)
  // npm run build:cms  → читаемые имена без хешей (под перенос в CMS)
  const cms = mode === 'cms';

  return {
    base: './',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [fileURLToPath(new URL('./src/assets/icons', import.meta.url))],
        symbolId: 'icon-[name]',
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: cms ? 'assets/js/[name].js' : 'assets/[name]-[hash].js',
          chunkFileNames: cms ? 'assets/js/[name].js' : 'assets/[name]-[hash].js',
          assetFileNames: cms
            ? (assetInfo) => {
              const name = assetInfo.name ?? '';
              if (/\.(png|jpe?g|webp|avif|svg|gif)$/.test(name)) {
                return 'assets/img/[name].[ext]';
              }
              if (/\.css$/.test(name)) {
                return 'assets/css/[name].[ext]';
              }
              return 'assets/[name].[ext]';
            }
            : undefined,
        },
      },
    },
  };
});