import './CSS/Style.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Grid } from '@mui/material';

function Footer() {

    return (
      <div className="contactContainer">
        <div className="svgContainerFooter">
            <svg className="svgFooter" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shapeFillFooter"></path>
            </svg>
        </div>

        <Grid
          container 
          spacing={0}
          rowGap={0}
          direction="row"
          justifyContent='flex-end'
          align='center'
        >
          <Grid item xs={12}>
                <div className="social">
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