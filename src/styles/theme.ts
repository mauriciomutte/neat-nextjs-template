export default {
	grid: {
		container: '130rem',
		gutter: '3.2rem',
	},
	border: {
		radius: '0.4rem',
	},
	colors: {
		white: '#FAFAFA',
		black: '#272727',
		gray: '#eee',
	},
	spacings: {
		xxsmall: '0.8rem',
		xsmall: '1.6rem',
		small: '2.4rem',
		medium: '3.2rem',
		large: '4.0rem',
		xlarge: '4.8rem',
		xxlarge: '5.6rem',
	},
	layers: {
		base: 10,
		overlay: 20,
		modal: 30,
		alwaysOnTop: 40,
	},
	transition: {
		default: '0.3s ease-in-out',
		fast: '0.1s ease-in-out',
	},
} as const;
