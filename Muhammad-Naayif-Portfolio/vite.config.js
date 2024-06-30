import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    fs: {
      allow: ['..'],
    },
  },
  build: {
    outDir: 'dist', // Ensure the output directory is set to 'dist'
  },
  base: '/', // Ensure the base path is set to '/'
});
