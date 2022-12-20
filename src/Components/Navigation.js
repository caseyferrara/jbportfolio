import './CSS/Style.css'
import { Link } from 'react-router-dom';
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
            >
            <Link 
              to="/home" 
              style={{ 
                textDecoration: 'none',
                margin: 0,
                fontFamily: 'Marcellus',
                color: 'white',
             }}
            >
              Home
            </Link>
            </Button>
            <Button 
              className="navLink"
            >
            <Link 
              to="/about" 
              style={{ 
                textDecoration: 'none',
                margin: 0,
                fontFamily: 'Marcellus',
                color: 'white',
             }}
            >
              About
            </Link>
            </Button>
            <Button 
              className="navLink"
            >
            <Link 
              to="/portfolio" 
              style={{ 
                textDecoration: 'none',
                margin: 0,
                fontFamily: 'Marcellus',
                color: 'white',
             }}
            >
              Portfolio
            </Link>
            </Button>
            <Button 
              className="navLink"
            >
            <Link 
              to="/contact" 
              style={{ 
                textDecoration: 'none',
                margin: 0,
                fontFamily: 'Marcellus',
                color: 'white',
             }}
            >
              Contact
            </Link>
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;