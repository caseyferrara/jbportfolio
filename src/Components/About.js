import './CSS/Animation.css';
import './CSS/Style.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BrushIcon from '@mui/icons-material/Brush';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import React, { useState, useEffect } from 'react';
import { useMediaQuery, Box, ImageList, ImageListItem, Grid } from '@mui/material';
import { Element } from 'react-scroll';

function About() {

  const isMobile = useMediaQuery('(max-width: 600px)');
  const [aboutImages, setAboutImages] = useState([]);

  useEffect(() => {

    async function fetchData() {
      const res = await fetch('http://localhost:3001/about');
      const data = await res.json();

      data.forEach(about => {
        setAboutImages(current => [...current, {
          id: about.id,
          title: about.title,
          image: `http://localhost:3001/images/${about.title}.jpg`
        }])
      });        
    }
    fetchData();

  }, []); 

  return (
      <Element id="about">
        <div className="allContainer">
              <Grid spacing={1} align="center" container>
                <Grid 
                  item xs={12} 
                  sm={12}
                  className="headerText tracking-in-expand"
                >
                  about
                </Grid>
                <Grid 
                  item xs={12} 
                  sm={12}
                >
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Grid>
                  <Grid item xs={4} sm={4}>
                    <TipsAndUpdatesIcon fontSize="large" className="aboutIcon swing-in-top-bck" />
                    <h3 className="iconText tracking-in-expand">innovative</h3>
                  </Grid>
                  <Grid item xs={4} sm={4}>
                    <BrushIcon fontSize="large" className="aboutIcon swing-in-top-bck" />
                    <h3 className="iconText tracking-in-expand">creative</h3>
                  </Grid>
                  <Grid item xs={4} sm={4}>
                    <VisibilityIcon fontSize="large" className="aboutIcon swing-in-top-bck" />
                    <h3 className="iconText tracking-in-expand">visionary</h3>
                  </Grid>
                <Grid align="center" container rowGap={2}>
                <Box 
                  sx={{ 
                    width: 1000, 
                    height: 400, 
                    display: 'block', 
                    margin: 'auto', 
                    overflowY: 'scroll', 
                    scrollbarWidth: 'none'
                  }}>
                  <ImageList 
                    variant="masonry" 
                    cols={isMobile ? 1 : 2}
                    gap={8} 
                    sx={{
                      "@media (max-width: 600px)": {
                        maxWidth: 300
                      }
                    }}
                  >
                    {aboutImages.map((item) => (
                      <ImageListItem key={item.id}>
                        <img
                          src={item.image}
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
      </Element>
  );
}

export default About;
