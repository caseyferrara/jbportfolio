// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';

import avatar from '../Images/jb.jpeg'
import { Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';

function About() {

  const classes = {
      aboutContainer: {
        backgroundColor: '#E8EAE5',
        height: '100vh',
        fontFamily: 'Kanit',
        width: '100%',
      },
      svgContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',
        lineHeight: 0,
        transform: 'rotate(180deg)',
      },
      svg: {
        display: 'block',
        width: 'calc(174% + 1.3px)',
        height: '650px',
        zIndex: 1,
      },
      shapefill: {
        fill: '#303030'
      },
      tagline: {
        fontStyle: 'italic',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
      },
      link: {
        margin: 10,
        color: 'black',
      },
  };

  return (

        <div style={classes.aboutContainer}>
          <Grid 
          container 
          spacing={2}
          rowGap={3}
          direction="column"
          align="center"
          >

              <div style={classes.svgContainer}>
                <svg style={classes.svg} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" style={classes.shapefill}></path>
                </svg>
              </div>

              <Grid item xs={12}>
                  <h2 style={classes.tagline}>Creating beautiful designs with passion and purpose</h2>
              </Grid>
              <Grid item xs={12}>
                <h1 style={classes.tagline}>Hi! My name is Jillian Brown.</h1>
              </Grid>
              
              <Grid item xs={6} sm={12}>     
                  <Avatar 
                  alt="Jillian Brown" 
                  src={avatar}
                  style={classes.avatarHover}
                  sx={{ width: 300, height: 300 }}
                  />
              </Grid>

              <Grid item xs={12} sm={12}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Quisque eu sollicitudin erat, eu faucibus massa. Maecenas a lobortis magna. 
                    Nunc quis augue a mi eleifend luctus eu eu nisi. Nullam pretium auctor neque, eu posuere dui vehicula ac. 
                    Vivamus quis dui dolor. Quisque at eros ipsum.</p>
              </Grid>

            {/* Add to contact? */}
            {/* <Grid item xs={12}>
                <div style={classes.social}>
                  <a href="https://twitter.com">
                    <TwitterIcon style={classes.link}/>
                  </a>
                  <a href="https://facebook.com">
                    <FacebookIcon style={classes.link}/>
                  </a>
                  <a href="https://instagram.com">
                    <InstagramIcon style={classes.link}/>
                  </a>
                </div>
            </Grid> */}
          </Grid>  
        </div>
  );
}

export default About;
