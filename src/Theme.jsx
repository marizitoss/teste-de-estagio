import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#367C2B',
		},
		secondary: {
			main: '#0047FF',
		},
		error: {
			main: '#FF6B6B',
		},
		success: {
			main: '#37D67A',
		},
		warning: {
			main: '#FFDE00',
		},
		text: {
			primary: '#303030',
			secondary: '#808080',
		},
		background: {
			default: '#FFFFFF',
		},
	},
	typography: {
		fontFamily: 'Inter, sans-serif',
		h1: {
			fontWeight: 'bold',
			fontSize: '32px',
		},
		body1: {
			fontWeight: 400,
			fontSize: '16px',
		},
		body2: {
			fontWeight: 600,
			fontSize: '14px',
		},
		caption: {
			fontWeight: 400,
			fontSize: '12px',
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: '8px',
					textTransform: 'none',
					fontWeight: 600,
					padding: '12px 24px',
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					marginBottom: '16px',
				},
			},
		},
	},
});

export default theme;
