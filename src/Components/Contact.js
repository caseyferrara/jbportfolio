import './CSS/Style.css'
import { Grid, Box, TextField, Button } from '@mui/material';
import { Element } from 'react-scroll';
import Footer from './Footer';

function Contact() {

    return (
      
      <Element id="contact">
        <div className="contactContainer">
          <Grid
              container 
              direction="row" 
              align="center"
              rowGap={4}
          >
            <Grid className='contact-index' item xs={12} sm={12}>
              <h1 className='headerText tracking-in-expand'>contact</h1>
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
                      placeholder="john doe"
                      margin="normal"
                      InputProps={{
                        style: {
                          fontFamily: 'Marcellus',
                          width: 350,
                        }
                      }}
                      InputLabelProps={{
                        style: {
                          fontFamily: 'Marcellus',
                          color: '#303030',
                          textTransform: 'lowercase',
                        }
                      }}
                  />
                  <br></br>
                  <TextField
                      id="outlined-textarea"
                      label="Email"
                      placeholder="jillian@jillianbrown.com"
                      margin="normal"
                      InputProps={{
                        style: {
                          fontFamily: 'Marcellus',
                          width: 350
                        }
                      }}
                      InputLabelProps={{
                        style: {
                          fontFamily: 'Marcellus',
                          color: '#303030',
                          textTransform: 'lowercase',
                        }
                      }}
                  />
                  <br></br>
                  <TextField
                      id="outlined-textarea"
                      label="Message"
                      placeholder="enter your message..."
                      multiline
                      margin="normal"
                      InputProps={{
                        style: {
                          fontFamily: 'Marcellus',
                          width: 350
                        }
                      }}
                      InputLabelProps={{
                        style: {
                          fontFamily: 'Marcellus',
                          color: '#303030',
                          textTransform: 'lowercase',
                        }
                      }}
                  />
                  <br></br>
                  <Button
                    variant='contained'
                    sx={{
                      color: 'white',
                      backgroundColor: '#303030',
                      textTransform: 'lowercase',
                      fontFamily: 'Marcellus',
                      borderColor: 'white',
                      fontSize: '12px',
                      display: 'block',
                      margin: 'auto',
                      ':hover': {
                        backgroundColor: '#3f3f3f',
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
      </Element>
    );
  }
  
  export default Contact;