import './CSS/Style.css'
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

        <div className="svgContainerHeader">
          <svg className="svgHeader" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shapeFill"></path>
          </svg>
        </div>
        <Grid
            container 
            direction="row" 
            align="center"
            rowGap={4}
        >
          <Grid className='contact-index' item xs={12} sm={12}>
            <h1 className='contact-header'>Contact Jillian Brown</h1>
          </Grid>
          <Grid className='contact-index' item xs={12} sm={12}>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              className='contact-form'
              sx={{
                backgroundColor: '#E8EAE5',
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
      </div>
    );
  }
  
  export default Contact;