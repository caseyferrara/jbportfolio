import './CSS/Animation.css';
import './CSS/Style.css';
import avatar from '../Images/jb.jpeg'
import { Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';

function About() {

  return (

        <div className="aboutContainer">
          <Grid 
          container 
          spacing={0}
          rowGap={0}
          direction="column"
          align="center"
          >

              <div className="svgContainerHeader">
                <svg className="svgHeader" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shapeFill"></path>
                </svg>
              </div>

              <Grid item xs={12}>
                <h1 className="tracking-in-expand tagline">Hi! My name is Jillian Brown.</h1>
              </Grid>
              <Grid item xs={12}>
                  <h2 className="tracking-in-expand tagline">Creating beautiful designs with passion and purpose</h2>
              </Grid>
              
              <Grid item xs={6} sm={12}>     
                  <Avatar 
                  alt="Jillian Brown" 
                  src={avatar}
                  className='swing-in-top-bck'
                  sx={{ width: 300, height: 300 }}
                  />
              </Grid>

              <Grid item xs={12} sm={12}>
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
