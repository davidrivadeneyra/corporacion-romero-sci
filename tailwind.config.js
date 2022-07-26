const withOpacity = (variableName) => {
	return ({ opacityValue }) => {
		if (opacityValue === undefined) {
			return `rgba(var(${variableName}))`
		}
		return `rgba(var(${variableName}), ${opacityValue})`
	}
}

module.exports = {
	// content: ['./src/**/*.{html,js}'],
	content: ['./pages/**/*.{html,js}', './components/**/*.{html,js}'],
	theme: {
		extend: {},
		maxWidth: {
			'screen-3xl': 1400,
		},
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
			headings: ['Lexend', 'sans-serif'],
		},
		colors: {
			primary: {
				100: withOpacity('--primary-100'),
				200: withOpacity('--primary-200'),
				300: withOpacity('--primary-300'),
				400: withOpacity('--primary-400'),
				500: withOpacity('--primary-500'),
				600: withOpacity('--primary-600'),
				700: withOpacity('--primary-700'),
				800: withOpacity('--primary-800'),
				900: withOpacity('--primary-900'),
				950: withOpacity('--primary-950'),
			},
			dark: {
				100: withOpacity('--dark-100'),
				200: withOpacity('--dark-200'),
				300: withOpacity('--dark-300'),
				400: withOpacity('--dark-400'),
				500: withOpacity('--dark-500'),
				600: withOpacity('--dark-600'),
				700: withOpacity('--dark-700'),
				800: withOpacity('--dark-800'),
				900: withOpacity('--dark-900'),
				950: withOpacity('--dark-950'),
			},
			yellow: {
				400: withOpacity('--yellow-400'),
				500: withOpacity('--yellow-500'),
				600: withOpacity('--yellow-600'),
				700: withOpacity('--yellow-700'),
				800: withOpacity('--yellow-800'),
				900: withOpacity('--yellow-900'),
				950: withOpacity('--yellow-950'),
			},
			basic: {
				white: withOpacity('--white'),
				black: withOpacity('--black'),
			},
		},
	},
}
