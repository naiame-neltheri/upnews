const theme = {
	fontSizes: [8, 10, 12, 14, 16, 20, 24, 32],
	space: [0, 2, 4, 8, 16, 24, 32],
	breakpoints: ['320px', '768px', '1260px', '1920px'],
	colors: {
		primary: '#1E1E24',
		background: '#2C2C54',
		border: '#ACC3A6',
		foreground: '#F5D6BA',
		secondary: '#9DA2AB',
		success: '#53DD6C',
		danger: '#CF1259',
		warning: '#F7E8A4'
	}
}

theme.fontSizes.sm = theme.fontSizes[1]
theme.fontSizes.md = theme.fontSizes[2]
theme.fontSizes.lg = theme.fontSizes[3]
theme.fontSizes.xl = theme.fontSizes[4]
theme.fontSizes.title= theme.fontSizes[5]

theme.breakpoints.sm = theme.breakpoints[0]
theme.breakpoints.md = theme.breakpoints[1]
theme.breakpoints.lg = theme.breakpoints[2]
theme.breakpoints.xl = theme.breakpoints[3]

theme.space.xs = theme.space[0]
theme.space.sm = theme.space[1]
theme.space.md = theme.space[2]
theme.space.lg = theme.space[3]
theme.space.xl = theme.space[4]

export default theme;