import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '../', ''); // Wczytaj z głównego folderu
  const PORT = env.VITE_API_PORT || 1000;

  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    server: {
      proxy: {
        '/api': {
          target: `http://localhost:${PORT}`,
          changeOrigin: true,
        },
      },
    },
  };
});