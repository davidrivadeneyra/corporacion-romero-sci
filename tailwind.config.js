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
			sans: ['Work Sans', 'sans-serif'],
			headings: ['Sora', 'sans-serif'],
		},
		colors: {
			primary: {
				050: withOpacity('--primary-050'),
				100: withOpacity('--primary-100'),
				200: withOpacity('--primary-200'),
				300: withOpacity('--primary-300'),
				400: withOpacity('--primary-400'),
				500: withOpacity('--primary-500'),
				600: withOpacity('--primary-600'),
				700: withOpacity('--primary-700'),
				800: withOpacity('--primary-800'),
				900: withOpacity('--primary-900'),
			},
			dark: {
				050: withOpacity('--dark-050'),
				100: withOpacity('--dark-100'),
				200: withOpacity('--dark-200'),
				300: withOpacity('--dark-300'),
				400: withOpacity('--dark-400'),
				500: withOpacity('--dark-500'),
				600: withOpacity('--dark-600'),
				700: withOpacity('--dark-700'),
				800: withOpacity('--dark-800'),
				900: withOpacity('--dark-900'),
			},
			basic: {
				white: withOpacity('--white'),
				black: withOpacity('--black'),
			},
		},
	},
}
