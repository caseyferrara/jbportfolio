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
                <svg className="svgHeader" id="svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 0,500 C 0,500 0,166 0,166 C 118.89952153110048,145.86602870813397 237.79904306220095,125.73205741626795 321,114 C 404.20095693779905,102.26794258373205 451.7033492822966,98.93779904306218 532,109 C 612.2966507177034,119.06220095693782 725.3875598086123,142.51674641148327 844,167 C 962.6124401913877,191.48325358851673 1086.7464114832537,216.99521531100478 1187,217 C 1287.2535885167463,217.00478468899522 1363.6267942583731,191.5023923444976 1440,166 C 1440,166 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#303030" fill-opacity="0.53" transform="rotate(-180 720 250)"></path>
                  <path d="M 0,500 C 0,500 0,333 0,333 C 66.00956937799043,306.55023923444975 132.01913875598086,280.1004784688995 237,285 C 341.98086124401914,289.8995215311005 485.93301435406704,326.14832535885165 590,323 C 694.066985645933,319.85167464114835 758.2488038277513,277.3062200956938 858,272 C 957.7511961722487,266.6937799043062 1093.0717703349283,298.6267942583732 1196,315 C 1298.9282296650717,331.3732057416268 1369.4641148325359,332.18660287081343 1440,333 C 1440,333 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#303030" fill-opacity="1" transform="rotate(-180 720 250)"></path>
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
