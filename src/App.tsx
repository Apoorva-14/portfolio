import {
  AppBar, Box, Button, IconButton, Link, Menu, MenuItem, ThemeProvider, Toolbar,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import {
  HashRouter as Router,
  Link as RouterLink,
  Switch,
  Route,
} from 'react-router-dom';
import theme from './theme';
import './App.css';
import Home from './pages/home';
import Interest from './pages/interest';
import Contact from './pages/contact';
import Work from './pages/work';

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
    <Router>
      <ThemeProvider theme={theme}>
        <AppBar position="sticky">
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Link component={RouterLink} variant="h6" color='textPrimary' to='/'>
                ME
              </Link>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  component={RouterLink}
                  to={`/${page.toLowerCase()}`}
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
                    <Link
                      key={page}
                      component={RouterLink}
                      to={`/${page.toLowerCase()}`}
                    >
                      {page}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <Link component={RouterLink} variant="h6" color='textPrimary' to='/'>
                ME
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/interest">
            <Interest />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
