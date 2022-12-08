import ReactFullpage from '@fullpage/react-fullpage';
import {
  AppBar, ThemeProvider, Toolbar, Typography,
} from '@material-ui/core';
import React from 'react';
import { theme, useStyles } from './theme';
import IntroTexts from './components/IntroTexts';
import About from './components/About';
import './App.css';

export default function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Me
          </Typography>
        </Toolbar>
      </AppBar>
      <ReactFullpage
        licenseKey={process.env.REACT_APP_FULLPAGE_LICENSE}
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section banner home">
              <IntroTexts />
            </div>
            <div className="section banner section-1">
              <About />
            </div>
            <div className="section banner foot" />
          </ReactFullpage.Wrapper>
        )}
      />
    </ThemeProvider>
  );
}
