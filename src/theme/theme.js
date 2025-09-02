import {createTheme} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {main: '#303030'},
    secondary: {main: '#0047FF'},
    error: {main: '#FF6B6B'},
    success: {main: '##FFDE00'},
    warning: {main: '#FFDE00'},
    text: {primary: '#303030', secondary: '#808080'},
    background: {default: '#FFFFFF'},
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {fontWeight: 700, fontSize: '2rem'},
    body1: {fontWeight: 400, fontSize: '1rem'},
    body2: {fontWeight: 600, fontSize: '0.875rem'},
    caption: {fontWeight: 400, fontSize: '0.75rem'},
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
          width: '100%',
        },
        body: {
          height: '100%',
          width: '100%',
          minHeight: '100vh',
          minWidth: '100vw',
          margin: 0,
          padding: 0,
          border: 'none',
          backgroundColor: '#FFFFFF',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        '#root': {
          height: '100vh',
          width: '100vw',
          minHeight: '100vh',
          minWidth: '100vw',
          margin: 0,
          padding: 0,
          border: 'none',
          display: 'flex',
          flexDirection: 'column',
        },
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0.5rem',
          textTransform: 'none',
          fontWeight: 600,
          padding: '0.75rem 1.5rem',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {marginBottom: '1rem'},
      },
    },
  },
});

export default theme;
