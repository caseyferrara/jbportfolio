import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Footer from './Footer';
import { Grid, Box, TextField, Button } from '@mui/material';

function Contact() {

    const classes = {
      contactContainer: {
        backgroundColor: '#E8EAE5',
        height: '100vh',
        width:'100%',
        fontFamily: 'Kanit'
      },
      nav: {
          backgroundColor: '#E8EAE5',
      },
      navLinks: {
          margin: '0 auto',
          fontFamily: 'Kanit',
      },
        navLink: {
          color: 'white',
          margin: 10,
      }
    };

    return (
      <div style={classes.contactContainer}>
        <Grid
            container 
            direction="row" 
            align="center"
            rowGap={8}
        >
          <Grid item xs={12} sm={12}>
            <h1>Contact Jillian Brown</h1>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{
                borderRadius: 5,
                width: 650,
                height: 350,
                backgroundColor: 'white',
              }}
            >
                <TextField
                    id="outlined-textarea"
                    label="Name"
                    placeholder="John Doe"
                    margin="normal"
                    sx={{
                      width: '35ch'
                    }}
                />
                <br></br>
                <TextField
                    id="outlined-textarea"
                    label="Email"
                    placeholder="jillian@jillianbrown.com"
                    margin="normal"
                    sx={{
                      width: '35ch'
                    }}
                />
                <br></br>
                <TextField
                    id="outlined-textarea"
                    label="Message"
                    placeholder="Enter your message..."
                    multiline
                    margin="normal"
                    sx={{
                      width: '35ch'
                    }}
                />
                <br></br>
                <Button>Submit</Button>

                <Grid item xs={12}>
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
                </Grid>
            </Box>
          </Grid>
        </Grid>
        <Footer />
      </div>
    );
  }
  
  export default Contact;