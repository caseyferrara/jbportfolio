import './CSS/Style.css'
import WaveSvg from '../Images/waveNav.svg';
import whiteLogo from '../Images/whitelogo.png';
import blackLogo from '../Images/blacklogo.png';
import { Menu, MenuItem, AppBar, Toolbar, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Element } from 'react-scroll';
import React from 'react';
import styled from '@emotion/styled';

function Navigation() {

  const StyledImg = styled.img`
    height: 75px;
    width: auto;
    cursor: pointer;
    padding-left: 15px;
    padding-top: 15px;

    @media only screen and (max-width: 600px) {
      height: 50px;
    }
`;

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
                alignItems: 'center',
              }}
            >
              <Toolbar 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  width: '100%',
                }}
              >
                <Link
                    to="top"
                    smooth={true}
                    duration={500}
                  >
                    <StyledImg 
                      src={blackLogo} 
                      alt="logo" 
                    />
                </Link>
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
                          textTransform: 'lowercase'
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
                          textTransform: 'lowercase'
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
                          textTransform: 'lowercase'
                        }}
                      >
                      Contact
                      </Button>
                    </Link>
                  </MenuItem>
                </Menu>
              </Toolbar>
            </AppBar>

            <AppBar
              position="sticky" 
              elevation={0}
              style={{
                backgroundColor: '#E8EAE5',
                backgroundImage: `url(${WaveSvg})`,
                alignItems: 'center',
                backgroundSize: 'cover',
                width: '100%',
                height: 250,
                overflow: 'hidden'
              }}
            >
              <Toolbar 
                style={{ 
                  display: 'flex', 
                  width: '100%',
                }}
              >
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
                    <StyledImg 
                      src={whiteLogo} 
                      alt="logo" 
                    />
                  </Link>
                </div>
                <div 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'flex-end', 
                    alignItems: 'flex-end', 
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
                        textTransform: 'lowercase'
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
                        textTransform: 'lowercase'
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
                        textTransform: 'lowercase'
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