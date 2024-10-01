import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  build: {
    
    ssr: true,
    rollupOptions: {
      input: {
        // Specify the entry for client and SSR separately
        main: path.resolve(__dirname, 'src/entry-client.tsx'), // Client entry
        ssr: path.resolve(__dirname, 'src/entry-server.tsx'), // SSR entry
      },
      output: {
        assetFileNames: (assetInfo) => {
          // Remove hash from all asset file names
          return 'assets/[name][extname]';
        },
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
      },
    },
    // Optionally, specify the directory for the final build files
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
