import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3050,
  },
  preview: {
    port: 3050,
  },
  plugins: [react()],
});
