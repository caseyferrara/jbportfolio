import './CSS/Animation.css';
import './CSS/Style.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BrushIcon from '@mui/icons-material/Brush';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import React, { useState, useEffect } from 'react';
import { useMediaQuery, Box, ImageList, ImageListItem, Grid } from '@mui/material';
import { Element } from 'react-scroll';

function About() {

  const isMobile = useMediaQuery('(max-width: 1000px)');
  const [aboutImages, setAboutImages] = useState([]);

  useEffect(() => {

    async function fetchData() {
      const res = await fetch('https://secret-beyond-29351.herokuapp.com/about');
      const data = await res.json();

      data.forEach(about => {
        setAboutImages(current => [...current, {
          id: about.id,
          title: about.title,
          image: `https://secret-beyond-29351.herokuapp.com/Images/${about.title}.jpg`
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
                <p className="paragraph">As a graphic designer, I possess a passion for creating visually striking designs that effectively communicate. 
                I have experience across various mediums including print, digital, and packaging. 
                My attention to detail and ability to craft designs that are both visually appealing and functional is evident in my portfolio. 
                My portfolio showcases my versatility and ability to create outstanding designs in any medium, from branding and logo design to packaging and advertising. 
                I am always eager to take on new challenges and push my creativity to deliver exceptional results.</p>
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
                <Grid align="center" className="index" container rowGap={2}>
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
