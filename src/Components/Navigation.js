import './CSS/Style.css'
import WaveSvg from '../Images/waveNav.svg';
import whiteLogo from '../Images/whitelogo.png';
import { Menu, MenuItem, AppBar, Toolbar, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Element } from 'react-scroll';
import React from 'react';

function Navigation() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Element id="top">
      <div> 
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

            <AppBar
              position="sticky" 
              elevation={0}
              style={{
                backgroundColor: '#E8EAE5',
                backgroundImage: `url(${WaveSvg})`,
                alignItems: 'center',
                backgroundSize: 'cover',
                height: 250
              }}
            >
              <Toolbar style={{ display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <div 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'flex-start', 
                    alignItems: 'flex-start',
                  }}
                >
                  <Link 
                    to="top"
                    smooth={true}
                    duration={500}
                  >
                    <img 
                      src={whiteLogo} 
                      alt="logo"
                      style={{
                        height: 75,
                        width: 'auto',
                        cursor: 'pointer',
                        paddingLeft: 15,
                        paddingTop: 15
                      }}
                    >
                      
                    </img>
                  </Link>
                </div>
                <div 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    paddingRight: 75,
                    width: '100%'
                  }}
                >
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
                </div>
              </Toolbar>
            </AppBar>
      </div>
    </Element>
  );
}

export default Navigation;