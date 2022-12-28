import './CSS/Style.css'
import { Grid, Box, TextField, Button } from '@mui/material';

function Contact() {

    return (
      <div className="contactContainer">
        <Grid
            container 
            direction="row" 
            align="center"
            rowGap={4}
        >
          <Grid className='contact-index' item xs={12} sm={12}>
            <h1 className='contactHeader tracking-in-expand'>CONTACT</h1>
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
                      width: '35ch',
                      '@media (max-width: 600px)': {
                        width: '25ch'
                      }
                    }}
                />
                <br></br>
                <TextField
                    id="outlined-textarea"
                    label="Email"
                    placeholder="jillian@jillianbrown.com"
                    margin="normal"
                    sx={{
                      width: '35ch',
                      '@media (max-width: 600px)': {
                        width: '25ch'
                      }
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
                      width: '35ch',
                      '@media (max-width: 600px)': {
                        width: '25ch'
                      }
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