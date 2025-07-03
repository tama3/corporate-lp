import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
  },
  server: {
    open: true, // 開発サーバー起動時にブラウザを自動で開く
  },
});
