import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react-swc'
import tsConfigPaths from 'vite-tsconfig-paths'
import typescript from '@rollup/plugin-typescript'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    typescript()
  ],
  build: {
    rollupOptions: {
      input: ['./src/main.ts', './src/types/index.d.ts'],
    },
  },
})
