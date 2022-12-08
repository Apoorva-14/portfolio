import {
  createTheme, responsiveFontSizes, makeStyles, createStyles,
} from '@material-ui/core/styles';

/**
 * Theme
 */
export const theme = responsiveFontSizes(createTheme({
  typography: {
    fontFamily: 'Comic Neue, cursive',
  },
  palette: {
    type: 'dark',
    primary: {
      main: 'rgba(51, 29, 21, 1)',
    },
    background: {
      paper: 'rgba(60, 179, 113, 0.2)',
    },
  },
}));

export const useStyles = makeStyles(() => createStyles({
  title: {
    flexGrow: 1,
  },
}));
