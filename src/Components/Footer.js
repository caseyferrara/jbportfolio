import './CSS/Style.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Grid } from '@mui/material';

function Footer() {

    return (
      <div 
        className="footerContainer"
      >
        <Grid container>
          <Grid item xs={12}>
            <div align="center" className="social">
              <a href="https://twitter.com">
                <TwitterIcon className="footerLink"/>
              </a>
              <a href="https://facebook.com">
                <FacebookIcon className="footerLink"/>
              </a>
              <a href="https://instagram.com">
                <InstagramIcon className="footerLink"/>
              </a>
              <br></br>
              <p className="footerText">Created by Casey Ferrara, for Jillan Brown</p>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
  
  export default Footer;