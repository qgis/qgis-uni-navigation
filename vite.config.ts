import { defineConfig } from 'vite';
import minifier from 'rollup-plugin-minify-template-literals';

export default defineConfig({
  plugins: [minifier()],
});
