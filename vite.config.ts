import { defineConfig, loadEnv } from 'vite';
import viteCompression from 'vite-plugin-compression';
import solidPlugin from 'vite-plugin-solid';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(() => {
  const env = loadEnv('all', process.cwd(), '');

  return {
    plugins: [
      solidPlugin(),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
      }),
      visualizer({
        open: env['VITE_OPEN_VISUALIZER'] === 'true',
      }),
    ],
    server: {
      port: 3000,
    },
    build: {
      target: 'esnext',
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  };
});
