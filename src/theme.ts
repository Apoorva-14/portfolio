import {
  createTheme, responsiveFontSizes,
} from '@material-ui/core/styles';

/**
 * Theme
 */
const theme = responsiveFontSizes(createTheme({
  typography: {
    fontFamily: 'Comic Neue',
  },
  palette: {
    type: 'dark',
    primary: {
      main: 'rgba(51, 29, 21, 1)',
    },
    background: {
      paper: 'rgba(161, 189, 166, 0.9)',
    },
  },
}));

export default theme;
