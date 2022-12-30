import './CSS/Style.css'
import WaveSvg from '../Images/waveNav.svg';
import { Menu, MenuItem, AppBar, Toolbar, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Element } from 'react-scroll';
import { useState, useEffect, useRef } from 'react';
import React from 'react';

function Navigation() {

  const [firstAppBarStyle, setFirstAppBarStyle] = useState({ display: 'none' });
  const secondAppBarRef = useRef(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    function handleScroll() {
      // Get the bounding client rect of the second AppBar
      const secondAppBarRect = secondAppBarRef.current.getBoundingClientRect();
      // Get the height of the viewport
      const viewportHeight = window.innerHeight;

      if (secondAppBarRect.bottom <= viewportHeight) {
        setFirstAppBarStyle({ display: 'block' });
      } else {
        setFirstAppBarStyle({ display: 'none' });
      }
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Element id="top">
      <div>
          <div style={firstAppBarStyle}>
            <AppBar
              elevation={0}
              sx={{
                backgroundColor: 'transparent',
                alignItems: 'flex-end'
              }}
            >
              <Button
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <MenuIcon
                  fontSize="large"
                  sx={{
                    color: '#303030'
                  }}
                />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                aria-labelledby="basic-demo-button"
              >
                <MenuItem onClick={handleClose}>
                  <Link
                    to="top"
                    smooth={true}
                    duration={500}
                  >
                    <Button 
                      onClick={handleClose}
                      className="navLink"
                      style={{ 
                        textDecoration: 'none',
                        margin: 0,
                        fontFamily: 'Marcellus',
                        color: '#303030',
                      }}
                    >
                      Logo
                    </Button>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                  >
                    <Button
                      className="navLink"
                      style={{ 
                        textDecoration: 'none',
                        margin: 0,
                        fontFamily: 'Marcellus',
                        color: '#303030',
                      }}
                    >
                    About 
                    </Button>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    to="portfolio"
                    smooth={true}
                    duration={500}
                  >
                    <Button
                      className="navLink"
                      style={{ 
                        textDecoration: 'none',
                        margin: 0,
                        fontFamily: 'Marcellus',
                        color: '#303030',
                      }}
                    >
                    Portfolio 
                    </Button>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                  >
                    <Button
                      className="navLink"
                      style={{ 
                        textDecoration: 'none',
                        margin: 0,
                        fontFamily: 'Marcellus',
                        color: '#303030',
                      }}
                    >
                    Contact
                    </Button>
                  </Link>
                </MenuItem>
              </Menu>
            </AppBar>
          </div>

            <AppBar
              ref={secondAppBarRef}
              position="sticky" 
              elevation={0}
              style={{
                backgroundColor: '#E8EAE5',
                backgroundImage: `url(${WaveSvg})`,
                backgroundSize: 'cover',
                alignItems: 'center',
                height: 250
              }}
            >
              <Toolbar>
                <Typography variant="h6" className="navLinks">
                  <Link 
                    to="top"
                    smooth={true}
                    duration={500}
                  >
                    <Button 
                      className="navLink"
                      style={{ 
                        textDecoration: 'none',
                        margin: 0,
                        fontFamily: 'Marcellus',
                        color: 'white',
                      }}
                    >
                      Logo
                    </Button>
                  </Link>
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                  >
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
                  </Link>
                  <Link
                    to="portfolio"
                    smooth={true}
                    duration={500}
                  >
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
                  </Link>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                  >
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
                  </Link>
                </Typography>
              </Toolbar>
            </AppBar>
      </div>
    </Element>
  );
}

export default Navigation;