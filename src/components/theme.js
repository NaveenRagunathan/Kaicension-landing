// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8A4FFF',
      light: '#A375FF',
      dark: '#7040CC',
    },
    secondary: {
      main: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#4A4A4A',
    },
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
    h1: {
      fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
      fontWeight: 800,
      fontSize: '4rem',
      lineHeight: 1.2,
      background: 'linear-gradient(135deg, #8A4FFF 0%, #A375FF 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h2: {
      fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
      fontWeight: 800,
      fontSize: '3rem',
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.4,
    },
    h4: {
      fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
      fontWeight: 400,
      fontSize: '2rem',
      lineHeight: 1.4,
    },
    button: {
      fontFamily: "'Satoshi', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: '12px 30px',
          fontSize: '1.1rem',
          fontFamily: "'Satoshi', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
          boxShadow: '0 4px 14px 0 rgba(138, 79, 255, 0.2)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(138, 79, 255, 0.3)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #8A4FFF 0%, #A375FF 100%)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 8px 32px 0 rgba(138, 79, 255, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 12px 48px 0 rgba(138, 79, 255, 0.2)',
          },
        },
      },
    },
  },
});

export default theme;
