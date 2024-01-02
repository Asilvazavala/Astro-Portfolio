/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ['class'],
	theme: {
		keyframes: {
			morph: {
				'0%': { 'border-radius': '60% 40% 30% 70% / 60% 30% 70% 40%' },
				'50%': { 'border-radius': '30% 60% 70% 40% / 50% 60% 30%' },
				'100%': { 'border-radius': '60% 40% 30% 70% / 60% 30% 70% 40%' }
			},
			zoomIn: {
				'0%': { 'transform': 'scale(0) rotate(360deg)'},
				'100%': { 'transform': 'scale(1) rotate(360deg)'}
			},
			zoomOut: {
				'0%': { 'transform': 'scale(1) rotate(360deg)'},
				'100%': { 'transform': 'rotate(360deg) scale(0)'}
			},
		},
		animation: {
			morph: 'morph 8s ease-in-out 1s infinite normal none running',
			zoomIn: 'zoomIn .5s ease-in-out .5s',
			zoomOut: 'zoomOut .5s ease-in-out .5s',
		},
		extend: {
			colors: {
				primary: '#00abf0',
				secondary: '#141e33',
				third: '#27052e',
				fourth: '#C8B6F8',
				fifth: '#8C2DE0',
				gray: '#94A3B8',
				grayStrong: '#454545ad'
			}
		},
	},
	plugins: [],
}
