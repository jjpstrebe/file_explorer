import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export const theme2 = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9facff',
    },
    secondary: {
      main: '#4477ff',
    },
    error: {
      main: red.A400,
    },
  },
});

export const themeLight = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: "#f2f5fa"
    }
  }
});

export const themeDark = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    }
  }
});
