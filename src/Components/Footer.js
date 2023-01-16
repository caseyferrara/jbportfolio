import './CSS/Style.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link, Box, AppBar, Typography, Toolbar } from '@mui/material';

function Footer() {

    return (
      <div 
        className="footerContainer"
      >
        <Box>
          <AppBar 
            position="static"
            sx={{
              backgroundColor: "#303030",
            }}
          >
            <Toolbar>
              <Typography 
                variant="h8" 
                sx={{ 
                  flexGrow: 1,
                  fontFamily: "Marcellus"
                }}
              >
                jillian brown portfolio 2023
              </Typography>
              <Link href="https://www.linkedin.com/in/jillian-brown-578bb9224/" target="_blank" color="inherit">
                <LinkedInIcon />
              </Link>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    );
  }
  
  export default Footer;