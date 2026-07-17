import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
	site: 'https://career404.github.io',
	base: '/MW5-mechlab',
	vite: {
		plugins: [tailwindcss()],
	},
})
