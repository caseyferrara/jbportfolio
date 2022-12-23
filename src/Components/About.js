import './CSS/Animation.css';
import './CSS/Style.css';
import avatar from '../Images/jb.jpeg';
import { Grid, Avatar } from '@mui/material';

function About() {

  return (

        <div className="aboutContainer">
              <Grid spacing={1} align="center" container>
                <Grid 
                  item xs={12} 
                  sm={12}
                  className="headerText"
                >
                  ABOUT JILLIAN BROWN
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Avatar 
                    alt="Jillian Brown" 
                    src={avatar}
                    className='swing-in-top-bck'
                    sx={{ width: 'auto', height: 'auto' }}
                  />
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Avatar 
                    alt="Jillian Brown" 
                    src={avatar}
                    className='swing-in-top-bck'
                    sx={{ width: 'auto', height: 'auto' }}
                  />
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Avatar 
                    alt="Jillian Brown" 
                    src={avatar}
                    className='swing-in-top-bck'
                    sx={{ width: 'auto', height: 'auto' }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <h1 className="tracking-in-expand tagline">Hi! My name is Jillian Brown.</h1>
                  <h2 className="tracking-in-expand tagline">Creating beautiful designs with passion and purpose</h2>
                </Grid>
                <Grid item xs={12}>
                  <p className="tracking-in-expand">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Quisque eu sollicitudin erat, eu faucibus massa. Maecenas a lobortis magna. 
                    Nunc quis augue a mi eleifend luctus eu eu nisi. Nullam pretium auctor neque, eu posuere dui vehicula ac. 
                    Vivamus quis dui dolor. Quisque at eros ipsum.</p>
                </Grid>
              </Grid> 
        </div>
  );
}

export default About;
