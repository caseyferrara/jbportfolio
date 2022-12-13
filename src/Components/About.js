import React from 'react';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
import avatar from '../Images/jb.jpeg'
import { Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';

function About() {

const classes = {
    avatar: {
      margin: '0 auto',
    },
    avatarHover: {
      '&:hover': {
        transform: 'scale(1.1)',
      }
    },
    aboutContainer: {
      backgroundColor: '#E3E3E3',
      height: '100vh',
      fontFamily: 'Kanit'
    },
    tagline: {
      fontStyle: 'italic',
      textAlign: 'center',
    },
    social: {
      display: 'flex',
      justifyContent: 'center',
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
