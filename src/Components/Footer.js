import './CSS/Style.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Grid } from '@mui/material';

function Footer() {

    return (
      <div className="contactContainer">
        <div className="svgContainerFooter">
          <svg className="svgFooter" width="100%" height="100%" id="svg" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,600 C 0,600 0,300 0,300 C 75.97129186602868,348.4019138755981 151.94258373205736,396.80382775119614 257,394 C 362.05741626794264,391.19617224880386 496.2009569377991,337.1866028708134 590,319 C 683.7990430622009,300.8133971291866 737.2535885167465,318.44976076555025 827,334 C 916.7464114832535,349.55023923444975 1042.7846889952152,363.0143540669856 1151,357 C 1259.2153110047848,350.9856459330144 1349.6076555023924,325.4928229665072 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="#303030" fill-opacity="1"></path>
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