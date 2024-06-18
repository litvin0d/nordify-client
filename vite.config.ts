import { URL, fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

const vitePWA = VitePWA({
	registerType: 'autoUpdate',
	outDir: 'dist',
	manifest: {
		name: 'Nordify',
		short_name: 'Nordify',
		description: 'Nordify Messenger',
		theme_color: '#2E3440',
		icons: [
			{
				src: 'android-chrome-192x192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: 'android-chrome-512x512.png',
				sizes: '512x512',
				type: 'image/png',
			},
			{
				src: 'apple-touch-icon.png',
				sizes: '180x180',
				type: 'image/png',
			},
			{
				src: 'favicon-16x16.png',
				sizes: '16x16',
				type: 'image/png',
			},
			{
				src: 'favicon-32x32.png',
				sizes: '32x32',
				type: 'image/png',
			},
		],
	},
});

export default defineConfig({
	plugins: [
		vue(),
		vitePWA,
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	server: {
		proxy: {
			'/api': {
				target: 'http://localhost:5000' ?? '/',
			},
		},
	},
});
