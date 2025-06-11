// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	vite: {
		resolve: {
			alias: {
				src: new URL('./src', import.meta.url).pathname,
			},
		},
	},
});
