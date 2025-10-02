import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import process from 'process';

// https://vitejs.dev/config/
export default defineConfig(() => ({
  base: process.env.NODE_ENV === 'production' ? '/DSA-Problems-Tracker/' : '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));