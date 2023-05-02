/// <reference types="vitest" />
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react-swc';
import tsConfigPaths from 'vite-tsconfig-paths';
// import typescript from '@rollup/plugin-typescript'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			tsDecorators: true,
		}),
		tsConfigPaths(),
		// typescript()
	],
	test: {
		globals: true,
		environment: 'jsdom',
		css: true,
		setupFiles: 'src/setupTests.js',
		reporters: ['verbose'],
		// coverage: {
		// 	reporter: ['text', 'json', 'html'],
		// 	include: ['src/**/*'],
		// 	exclude: [],
		// },
	},
	// build: {
	//   rollupOptions: {
	//     input: ['./src/main.ts', './src/types/index.d.ts'],
	//   },
	// },
});
