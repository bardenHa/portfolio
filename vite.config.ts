import { defineConfig, loadEnv } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(() => {
  const env = loadEnv('all', process.cwd(), '');

  return {
    plugins: [
      solidPlugin(),
      visualizer({
        open: env.VITE_OPEN_VISUALIZER === 'true',
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
