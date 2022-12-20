import './CSS/Style.css'
import Footer from './Footer';
import { Grid, Box, TextField, Button } from '@mui/material';

function Contact() {

    const classes = {
      contactContainer: {
        backgroundColor: '#E8EAE5',
        height: '100vh',
        width:'100%',
        fontFamily: 'Kanit'
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
                width: 650,
                height: 350,
                backgroundColor: '#E8EAE5',
                border: 6,
                borderRadius: 5,
                borderColor: '#303030'
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
                <Button
                  variant='contained'
                  sx={{
                    backgroundColor: '#303030',
                    ':hover': {
                      backgroundColor: '#404040'
                    }
                  }}
                >
                Submit
                </Button>
            </Box>
          </Grid>
        </Grid>
        <Footer />
      </div>
    );
  }
  
  export default Contact;