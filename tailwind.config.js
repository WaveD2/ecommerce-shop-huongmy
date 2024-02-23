/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#f0f2f5",
				secondary: "#ff813f",
				tertiary: "#222222",
				slate: {
					10: "#f1f3f4",
				},
				green: {
					50: "#30AF5B",
					90: "#292C27",
				},
				gray: {
					10: "#eeeeee",
					20: "#A2A2A2",
					30: "#7b7b7b",
					50: "#585858",
					90: "#141414",
				},
			},
			backgroundImage: {
				hero: "url('/src/assets/bg-hero.jpeg')",
				bannerOffset: "url('/src/assets/bg_be_gai.png')",
			},
			screens: {
				xs: "400px",
			},
			maxWidth: {
				"10xl": "1512px",
			},
			borderRadius: {
				"5xl": "40px",
			},
		},
	},
	plugins: [],
}
