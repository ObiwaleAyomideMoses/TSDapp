import { defineConfig } from 'tsup';
import cpy from 'cpy';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  outDir: 'dist',
  onSuccess: async () => {
    try {
      // Copy all SVG files to the dist folder
      await cpy('src/assets/svg/*.svg', 'dist/assets/svg');
      console.log('SVG files copied successfully.');
    } catch (error) {
      console.error('Error copying SVG files:', error);
    }
  },
});
