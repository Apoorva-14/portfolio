import {
  createTheme, responsiveFontSizes, makeStyles, createStyles,
} from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

/**
 * Light Theme
 */
export const lightTheme = responsiveFontSizes(createTheme({
  typography: {
    fontFamily: 'Comic Neue, cursive',
  },
  palette: {
    type: 'light',
    primary: {
      main: grey[500],
    },
    background: {
      paper: 'rgba(255,255,255,0.5)',
    },
  },
}));

/**
 * Dark Theme
 */
export const darkTheme = responsiveFontSizes(createTheme({
  typography: {
    fontFamily: 'Comic Neue, cursive',
  },
  palette: {
    type: 'dark',
    primary: {
      main: 'rgba(51, 29, 21, 1)',
    },
    background: {
      paper: 'rgba(66, 66, 66, 0.4)',
    },
  },
}));

export const useStyles = makeStyles(() => createStyles({
  title: {
    flexGrow: 1,
  },
}));
