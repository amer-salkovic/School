import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1A73E8', // Plava za glavne CTA elemente
    },
    secondary: {
      main: '#43A047', // Zelena za akcente i pozitivan feedback
    },
    background: {
      default: '#F5F5F5', // Svetla pozadina za dobar kontrast
      paper: '#FFFFFF', // Kartice i formulari na svetloj pozadini
    },
    text: {
      primary: '#212121', // Tamno siva za osnovni tekst
      secondary: '#757575', // Svetlo siva za sekundarni tekst
    },
    warning: {
      main: '#FFA726', // Narandžasta za akcente (dugmići, upozorenja)
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.4rem',
      color: '#1A73E8',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.2rem',
      color: '#212121',
    },
    button: {
      textTransform: 'none', // Bez CAPS LOCK za dugmiće
    },
  },
});

export default theme;
