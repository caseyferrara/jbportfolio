import './CSS/Style.css'
import { useState } from 'react';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { Snackbar, Grid, Box, TextField, Button, Typography } from '@mui/material';
import { Element } from 'react-scroll';
import Footer from './Footer';

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [alertMessage, setAlertMessage] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleSubmit = e => {
      e.preventDefault();
      fetch('http://localhost:3001/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        });

      setName('');
      setEmail('');
      setMessage('');

      setAlertMessage('Your email has been sent!');
      setSnackbarOpen(true);
    }

    const alertClose = () => {
      setAlertMessage('');
      setSnackbarOpen(false);
    }
  

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
                autoComplete="on"
                className='contact-form'
                sx={{
                  backgroundColor: '#E8EAE5',
                }}
              >
                <Grid item xs={12}>
                  <ContactSupportIcon 
                    sx={{
                      color: "#303030",
                    }}
                    fontSize="large"
                  />
                  <Typography
                    sx={{
                      fontFamily: "Marcellus"
                    }}
                  >
                    let's chat! contact me below
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                      onChange={e => setName(e.target.value)}
                      id="outlined-textarea"
                      label="name"
                      placeholder="john doe"
                      margin="normal"
                      value={name}
                      InputProps={{
                        style: {
                          fontFamily: 'Marcellus',
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
                </Grid>
                <Grid item xs={12}>
                  <TextField
                      onChange={e => setEmail(e.target.value)}
                      id="outlined-textarea"
                      label="email"
                      placeholder="jillian@jillianbrown.com"
                      margin="normal"
                      value={email}
                      InputProps={{
                        style: {
                          fontFamily: 'Marcellus',
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
                </Grid>
                <Grid item xs={12}>
                  <TextField
                      onChange={e => setMessage(e.target.value)}
                      id="outlined-textarea"
                      label="message"
                      placeholder="enter your message..."
                      multiline
                      rows={4}
                      margin="normal"
                      value={message}
                      InputProps={{
                        style: {
                          fontFamily: 'Marcellus',
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
                </Grid>
                <Grid item xs={12}>
                  <Button
                    onClick={handleSubmit}
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
                </Grid>
                <Snackbar open={snackbarOpen} message={alertMessage} autoHideDuration={3000} onClose={alertClose} />
              </Box>
            </Grid>
          </Grid>
          <Footer />
        </div>
      </Element>
    );
  }
  
  export default Contact;