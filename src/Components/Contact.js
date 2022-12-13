import { Grid, Box, TextField, Button } from '@mui/material';

function Contact() {

    const classes = {
      contactContainer: {
        backgroundColor: '#E3E3E3',
        height: '100vh',
        fontFamily: 'Kanit'
      },
      nav: {
          backgroundColor: '#2E282A',
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
            rowGap={15}
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
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  }
  
  export default Contact;