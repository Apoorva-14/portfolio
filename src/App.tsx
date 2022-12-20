import ReactFullpage from '@fullpage/react-fullpage';
import {
  AppBar, Box, Button, IconButton, Menu, MenuItem, ThemeProvider, Toolbar, Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import theme from './theme';
import IntroTexts from './components/IntroTexts';
import About from './components/About';
import './App.css';

export default function App() {
  const pages = ['Work', 'Interest', 'Contact'];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Typography variant="h6">
              ME
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="medium"
              aria-label="all pages"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography align="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Typography variant="h6">
              ME
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <ReactFullpage
        licenseKey={process.env.REACT_APP_FULLPAGE_LICENSE}
        paddingBottom="64px"
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
