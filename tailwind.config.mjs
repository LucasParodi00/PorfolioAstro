/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'blanco': '#ffffff',
				'negro': '#000000',
				'azulOscuro': '#000062',
				'fondo': '#000027',
				'mostaza': '#E49800',
				'naranja': '#F13107',
				'rosado': '#FF5080',
				'naranjaBrillante': '#FF5733',
				'verdeLima': '#32CD32'
			}
		},
	},
	plugins: [],
}
