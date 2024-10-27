import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
};

const Navbar = () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Ekonomsko-Trgovinska Škola
      </Typography>
      <Link to="/" style={linkStyle}>
        <Button color="inherit">Početna</Button>
      </Link>
      <Link to="/smerovi" style={linkStyle}>
        <Button color="inherit">Smerovi</Button>
      </Link>
      <Link to="/predmeti" style={linkStyle}>
        <Button color="inherit">Prosek</Button>
      </Link>
    </Toolbar>
  </AppBar>
);

export default Navbar;
