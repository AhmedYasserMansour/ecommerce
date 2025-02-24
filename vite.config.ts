import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  base: '/ecommerce/',
  resolve : {
    alias : {
      '@': path.resolve(__dirname, 'src'),
      '@assets' : path.resolve(__dirname, "src/assets"),
      '@commponents' : path.resolve(__dirname, './src/commponents'),
      '@hooks' : path.resolve(__dirname, './src/hooks'),
      '@pages' : path.resolve(__dirname, "src/pages"),
      '@routes' : path.resolve(__dirname, './src/routes'),
      '@store'  : path.resolve(__dirname, 'src/store'),
      '@CustomTypes' : path.resolve(__dirname, "src/types"),
      '@styles' : path.resolve(__dirname, "src/styles"),
      '@layouts' : path.resolve(__dirname, "src/layouts"),
      '@utils' : path.resolve(__dirname, './src/utils'),
      '@services' : path.resolve(__dirname, "src/services"),
    }
  },
  plugins: [react(),svgr()],
});

