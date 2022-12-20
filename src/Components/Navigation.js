import './CSS/Style.css'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Navigation() {

  return (
    <div>
      <AppBar 
        position="sticky" 
        sx={{
          backgroundColor: '#303030',
          alignItems: 'center'
        }}
      >
        <Toolbar>
          <Typography variant="h6" className="navLinks">
            <Button 
              className="navLink"
              sx={{
                margin: 0,
                fontFamily: 'Marcellus',
                color: 'white'
              }}
            >
            Home
            </Button>
            <Button 
              className="navLink"
              sx={{
                margin: 0,
                fontFamily: 'Marcellus',
                color: 'white'
              }}
            >
            About
            </Button>
            <Button 
              className="navLink"
              sx={{
                margin: 0,
                fontFamily: 'Marcellus',
                color: 'white'
              }}
            >
            Portfolio
            </Button>
            <Button 
              className="navLink"
              sx={{
                margin: 0,
                fontFamily: 'Marcellus',
                color: 'white'
              }}
            >
            Contact
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;