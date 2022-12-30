import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.jpeg';
import img4 from '../Images/img4.jpg';
import avatar from '../Images/jb.jpeg';
import InfoIcon from '@mui/icons-material/Info';
import React, { useState } from 'react';
import { IconButton, ImageList, ImageListItem, ImageListItemBar, Box, TextField, Select, MenuItem, Button, Grid }  from '@mui/material';

const Admin = () => {

  const [projectTitle, setProjectTitle] = useState('');
  const [projectCategory, setProjectCategory] = useState('branddesign');
  const [projectImage, setProjectImage] = useState(null);
  // const [existingProjects, setExistingProjects] = useState([]);

  const existingProjects = [
    { id: 1, title: 'A wonderful piece of art', category: 'Brand Design', src: img1},
    { id: 2, title: 'This looks really cool', category: 'Brand Design', src: img2},
    { id: 3, title: 'I cant believe I made this', category: 'Brand Design', src: img3},
    { id: 4, title: 'Please look at this!', category: 'Brand Design', src: img4},
  ]

  const aboutImages = [
    { id: 1, img: avatar, title: 'Jillian Brown'},
    { id: 2, img: avatar, title: 'Jillian Brown'},
    { id: 3, img: avatar, title: 'Jillian Brown'},
    { id: 4, img: avatar, title: 'Jillian Brown'},
    { id: 5, img: avatar, title: 'Jillian Brown'},
    { id: 6, img: avatar, title: 'Jillian Brown'},
  ]

  const handleChange = (event) => {
    if (event.target.name === 'projectTitle') {
      setProjectTitle(event.target.value);
    } else if (event.target.name === 'projectCategory') {
      setProjectCategory(event.target.value);
    }
  };

  const handleImageChange = (event) => {
    setProjectImage(event.target.files[0]);
  };

  const handleSubmit = () => {
    // Submit the new project to the server here
  };

  return (
    <div className='adminContainer'>
      <Grid item xs={12}>
              <h1 className='adminHeader'>Admin Page</h1>
      </Grid>
      <Grid align="center" container spacing={3}>

        <Grid item xs={12} sm={12} md={6}>
          <Box
            sx={{
              border: 3,
              borderRadius: 5,
              borderColor: '#303030',
              maxWidth: 650,
              height: 500, 
            }}
          >
            <Grid  align="center" container spacing={3}>
              <Grid item xs={12}>
                <h2>Add a new project</h2>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Project Title"
                  name="projectTitle"
                  value={projectTitle}
                  onChange={handleChange}
                />
                  <Select
                    label="Project Category"
                    name="projectCategory"
                    value={projectCategory}
                    onChange={handleChange}
                  >
                    <MenuItem value="branddesign">Brand Design</MenuItem>
                    <MenuItem value="personal">Personal</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button 
                    onClick={handleSubmit}
                    sx={{
                      color: 'white',
                      backgroundColor: '#303030',
                      border: 1,
                      fontFamily: 'Marcellus',
                      borderColor: 'white',
                      fontSize: '12px',
                      margin: '5px',
                      ':hover': {
                        backgroundColor: '#3f3f3f',
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <Box
            sx={{
              border: 3,
              borderRadius: 5,
              borderColor: '#303030',
              maxHeight: 500, 
              maxWidth: 650,
              display: 'block', 
              margin: 'auto', 
              overflowY: 'scroll'
            }}
            >
              <Grid item xs={12}>
                <h2>Existing projects</h2>
              </Grid>
              <ImageList sx={{ maxWidth: 450 }} variant="woven" cols={3} gap={8}>
                {existingProjects.map((project) => (
                    <ImageListItem key={project.id}>
                      <img
                        src={`${project.src}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${project.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={project.title}
                        loading="lazy"
                      />
                      <ImageListItemBar
                        title={project.title}
                        subtitle={project.category}
                        actionIcon={
                          <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`info about ${project.title}`}
                          >
                            <InfoIcon />
                          </IconButton>
                        }
                      />
                    </ImageListItem>
                  ))}
              </ImageList>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <Box
            sx={{
              border: 3,
              borderRadius: 5,
              borderColor: '#303030',
              maxHeight: 500, 
              maxWidth: 650,
              display: 'block', 
              margin: 'auto', 
              overflowY: 'scroll'
            }}
            >
              <Grid item xs={12}>
                <h2>About images</h2>
              </Grid>
              <ImageList sx={{ maxWidth: 450 }} variant="masonry" cols={2} gap={8}>
                {aboutImages.map((about) => (
                  <ImageListItem key={about.id}>
                    <img
                      src={`${about.img}?w=248&fit=crop&auto=format`}
                      srcSet={`${about.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={about.title}
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
};

export default Admin;