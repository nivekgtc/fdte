export const theme = {
	palette: {
		primary: {
			default: '#00D68F',
			dark: '#004A45',
			transparent: '#00D68F48',
			gradient: `linear-gradient(to right, #00D68F 100%, #00D68F 48%)`,
		},
		action: {
			default: '#D82C66',
			dark: '#FF3D71',
		},
		background: {
			default: '',
			modal: '#00000035',
		},
		success: {
			main: '#32cc6f',
		},
		text: {
			primary: '',
		},
	},
	typography: {
		fontFamily: 'Open Sans',
		h1: {
			fontSize: '18',
			lineHeight: '24px',
			weight: 'bold',
		},
		h2: {
			fontSize: '15px',
			lineHeight: '24px',
			weight: 500,
		},
		button: {
			fontSize: '18',
			lineHeight: '24px',
			weight: 'bold',
		},
		label: {
			fontSize: '12',
			lineHeight: '24px',
			weight: 'bold',
		},
	},
	breakpoints: {
		xs: '0px',
		sm: '576px',
		md: '768px',
		lg: '992px',
		xl: '1360px',
	},
	types: {
		normal: '#C4C084',
		electric: '#E08D00',
		flying: '#8FA4FF',
		ice: '#B4EDF8',
		steel: '#7F8488',
		bug: '#87950C',
		fairy: '#E29FE6',
		ghost: '#6969AF',
		poison: '#924290',
		water: '#3B9BF1',
		dark: '#413831',
		fighting: '#852816',
		grass: '#67AF32',
		psychic: '#E25484',
		dragon: '#7361D1',
		fire: '#CF2C03',
		ground: '#C5A455',
		rock: '#5E491C',
	},
	neutral: {
		100: '#FFFFFF',
		200: '#F7F9FC',
		300: '#EDF1F7',
		400: '#E4E9F2',
		500: '#C5CEE0',
		600: '#8F9BB3',
		700: '#2E3A59',
		800: '#222845',
		900: '#192038',
		1000: '#151A30',
		1100: '#101426',
	},
} as const;

export type TypedTheme = typeof theme;
