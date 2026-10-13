import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Standalone frontend. The Node/Express backend runs separately and owns the
// API keys; this dev server proxies /api/* to it (http://localhost:3000).
export default defineConfig({
  server: {
    port: 5173,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
  // The shims reference process.env.GEMINI_API_KEY but ignore the value;
  // define empty strings so the browser never hits "process is not defined".
  define: {
    'process.env.API_KEY': JSON.stringify(''),
    'process.env.GEMINI_API_KEY': JSON.stringify(''),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
