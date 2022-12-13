import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const classes = {
    navContainer: {
        flexGrow: 1,
    },
    nav: {
        backgroundColor: '#2E282A',
    },
    navLinks: {
        margin: '0 auto',
        fontFamily: 'Kanit',
    },
      navLink: {
        color: 'white',
        margin: 10,
    }
};

function Navigation() {

  return (
    <div style={classes.navContainer}>
      <AppBar position="fixed" style={classes.nav}>
        <Toolbar variant='dense'>
          <Typography variant="h6" style={classes.navLinks}>
            <Button style={classes.navLink}>Home</Button>
            <Button style={classes.navLink}>About</Button>
            <Button style={classes.navLink}>Portfolio</Button>
            <Button style={classes.navLink}>Contact</Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;