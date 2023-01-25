import './CSS/Style.css'
import { useState } from 'react';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { styled } from '@mui/material/styles';
import { Grid, Box, TextField, Button, Typography } from '@mui/material';
import { Element } from 'react-scroll';
import Footer from './Footer';


const StyledTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#303030',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#303030',
    },
    '&:hover fieldset': {
      borderColor: '#303030',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#3f3f3f',
    },
  },
});

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [helpText, setHelpText] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();

      if (!name) {
        setHelpText('Please enter your name');
        return;
      }
    
      if (!email) {
        setHelpText('Please enter your email');
        return;
      }
    
      if (!message) {
        setHelpText('Please enter a message');
        return;
      }

      fetch('https://secret-beyond-29351.herokuapp.com/email', {
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

      setHelpText('Your email has been sent!');
    }

    const handleInputChange = (event) => {
      if (event.target.name === 'name') {
        setName(event.target.value);
      } else if (event.target.name === 'email') {
        setEmail(event.target.value);
      } else if (event.target.name === 'message') {
        setMessage(event.target.value);
      }
    };
  

    return (
      
      <Element id="contact">
        <div className="contactContainer">
          <Grid
              container 
              direction="row" 
              align="center"
              rowGap={4}
          >
            <Grid className='index' item xs={12} sm={12}>
              <h1 className='headerText tracking-in-expand'>contact</h1>
            </Grid>
            <Grid className='index' item xs={12} sm={12}>
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
                      marginTop: 1
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
                  <StyledTextField
                      onChange={handleInputChange}
                      variant="outlined"
                      label="name"
                      name="name"
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
                  <StyledTextField
                      onChange={handleInputChange}
                      variant="outlined"
                      label="email"
                      name="email"
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
                  <StyledTextField
                      onChange={handleInputChange}
                      variant="outlined"
                      label="message"
                      name="message"
                      placeholder="enter your message..."
                      multiline
                      rows={4}
                      margin="normal"
                      value={message}
                      helperText={helpText}
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
              </Box>
            </Grid>
          </Grid>
          <Footer />
        </div>
      </Element>
    );
  }
  
  export default Contact;