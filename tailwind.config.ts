import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				bnpp: [ 'bnpp-sans', 'sans-serif' ],
				sans: [ 'Open Sans', 'sans-serif' ],
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				"primary-green": '#00915A',
				"secondary-green": '#004B3A',
				"primary-brown": '#757575',
				"primary-gray": '#292929'
			},
		},
	},
	plugins: [],
} satisfies Config;
