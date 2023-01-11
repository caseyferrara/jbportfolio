import './CSS/Style.css'
import blackLogo from '../Images/blacklogo.png';
import { Button, Grid } from '@mui/material';
import styled from '@emotion/styled';

function Login() {

    const StyledImg = styled.img`
    height: 150px;
    width: auto;
    cursor: pointer;
  `;


    const auth0ClientId = 'vAKqtbL2JR7mmz24hMlxf993JJQIiBg9';
    const auth0Domain = 'dev-apyiutdwrm7rajdb.us.auth0.com';
    const redirectUri = encodeURIComponent('https://edd4-162-211-34-192.ngrok.io/callback');
    const googleConnection = 'google-oauth2';
      
    const handleClick = () => {
      const auth0Url = `https://${auth0Domain}/authorize?client_id=${auth0ClientId}&redirect_uri=${redirectUri}&response_type=code&connection=${googleConnection}&scope=openid%20profile%20email`;
      window.location.replace(auth0Url);
    }


    return (
      <div
        className="loginContainer"
      >
        <Grid spacing={0}>
          <Grid item xs={12}>
            <StyledImg 
              src={blackLogo} 
              alt="logo" 
            />
          </Grid>
          <Grid item xs={12}>
            <Button 
            onClick={handleClick}
            sx={{
              color: 'white',
              backgroundColor: '#303030',
              textTransform: 'lowercase',
              fontFamily: 'Marcellus',
              borderColor: 'white',
              fontSize: '12px',
              ':hover': {
                backgroundColor: '#3f3f3f',
              },
            }}
            >
              Sign in with Google
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
  
  export default Login;