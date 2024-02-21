/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "2rem",
				xl: "8.5rem",
			},
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1440px",
			},
		},
		extend: {
			fontFamily: {
				fontHeading: ["fontHeading", "sans-serif"],
			},
		},
	},
	plugins: [],
};
