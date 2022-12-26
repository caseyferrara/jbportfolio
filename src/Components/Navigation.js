import './CSS/Style.css'
import WaveSvg from '../Images/WavesOpacity.svg';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Navigation() {

  return (
    <div>
      <AppBar 
        position="sticky" 
        elevation={0}
        style={{
          backgroundColor: '#E8EAE5',
          backgroundImage: `url(${WaveSvg})`,
          backgroundSize: 'cover',
          alignItems: 'center',
        }}
      >
        <Toolbar>
          <Typography variant="h6" className="navLinks">
            <Button 
              className="navLink"
              style={{ 
                textDecoration: 'none',
                margin: 0,
                fontFamily: 'Marcellus',
                color: 'white',
              }}
            >
              Home
            </Button>
            <Button 
              className="navLink"
              style={{ 
                textDecoration: 'none',
                margin: 0,
                fontFamily: 'Marcellus',
                color: 'white',
              }}
            >
              About
            </Button>
            <Button 
              className="navLink"
              style={{ 
                textDecoration: 'none',
                margin: 0,
                fontFamily: 'Marcellus',
                color: 'white',
              }}
            >
              Portfolio
            </Button>
            <Button 
              className="navLink"
              style={{ 
                textDecoration: 'none',
                margin: 0,
                fontFamily: 'Marcellus',
                color: 'white',
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