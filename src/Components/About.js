import './CSS/Animation.css';
import './CSS/Style.css';
import avatar from '../Images/jb.jpeg';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BrushIcon from '@mui/icons-material/Brush';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { Box, ImageList, ImageListItem, Grid } from '@mui/material';

function About() {

  const itemData = [
    {
      img: avatar,
      title: 'Jillian Brown'
    },
    {
      img: avatar,
      title: 'Jillian Brown'
    },
    {
      img: avatar,
      title: 'Jillian Brown'
    },
    {
      img: avatar,
      title: 'Jillian Brown'
    },
    {
      img: avatar,
      title: 'Jillian Brown'
    },
    {
      img: avatar,
      title: 'Jillian Brown'
    }
  ]

  return (

        <div className="aboutContainer">
              <Grid spacing={1} align="center" container>
                <Grid 
                  item xs={12} 
                  sm={12}
                  className="headerText tracking-in-expand"
                >
                  ABOUT JILLIAN BROWN
                </Grid>
                <Grid 
                  item xs={12} 
                  sm={12}
                  className="tracking-in-expand"
                >
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Grid>
                  <Grid item xs={4} sm={4}>
                    <TipsAndUpdatesIcon fontSize="large" className="aboutIcon" />
                    <h3 className="iconText tracking-in-expand">Innovative</h3>
                  </Grid>
                  <Grid item xs={4} sm={4}>
                    <BrushIcon fontSize="large" className="aboutIcon" />
                    <h3 className="iconText tracking-in-expand">Creative</h3>
                  </Grid>
                  <Grid item xs={4} sm={4}>
                    <VisibilityIcon fontSize="large" className="aboutIcon" />
                    <h3 className="iconText tracking-in-expand">Visionary</h3>
                  </Grid>
                <Grid align="center" container rowGap={2}>
                <Box sx={{ width: 1000, height: 400, display: 'block', margin: 'auto', overflowY: 'scroll' }}>
                  <ImageList 
                    variant="masonry" 
                    cols={2}
                    gap={8} 
                  >
                    {itemData.map((item) => (
                      <ImageListItem key={item.img}>
                        <img
                          src={`${item.img}?w=248&fit=crop&auto=format`}
                          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                          className="slide-in-left"
                          alt={item.title}
                          loading="lazy"
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </Box>
                </Grid>
              </Grid> 
        </div>
  );
}

export default About;
