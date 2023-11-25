import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import type { UserConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };
  return {
    plugins: [react(), tsconfigPaths()],
    server: {
      port: process.env.VITE_PORT || 3001,
      host: 'localhost',
    },
    define: {
      'process.env': process.env,
    },
    resolve: {
      preserveSymlinks: true,
      alias: {
        '@stores/*': 'src/stores/*',
        '@services/*': 'src/services/*',
        '@components/*': 'src/components/*',
        '@hooks/*': 'src/hooks/*',
        '@utils/*': 'src/utils/*',
        '@config/*': 'src/config/*',
        '@app/*': 'src/*',
        '@core/*': 'src/core/*',
        '@page/*': 'src/pages/*',
        '@theme/*': 'src/theme/*',
        '@interfaces/*': 'src/interfaces/*',
      },
    },
  } as UserConfig;
});
