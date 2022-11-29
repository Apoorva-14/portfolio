import ReactFullpage from '@fullpage/react-fullpage';
import {
  AppBar, IconButton, ThemeProvider, Toolbar, Typography,
} from '@material-ui/core';
import { BrightnessHigh, BrightnessLow } from '@material-ui/icons';
import React, { useState } from 'react';
import { darkTheme, lightTheme, useStyles } from './theme';
import Cloud from './components/Cloud';
import IntroTexts from './components/IntroTexts';
import './App.css';

export default function App() {
  const [darkState, setDarkState] = useState(true);
  const classes = useStyles();

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <ThemeProvider theme={darkState ? darkTheme : lightTheme}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Me
          </Typography>
          {/* <IconButton onClick={handleThemeChange}>
            {darkState ? <BrightnessHigh /> : <BrightnessLow />}
          </IconButton> */}
        </Toolbar>
      </AppBar>
      <ReactFullpage
        licenseKey={process.env.REACT_APP_FULLPAGE_LICENSE}
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section banner home">
              <IntroTexts />
            </div>
            <div className="section banner section-1" />
            <div className="section banner foot" />
          </ReactFullpage.Wrapper>
        )}
      />
    </ThemeProvider>
  );
}
