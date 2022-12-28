import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.jpeg';
import img4 from '../Images/img4.jpg';
import avatar from '../Images/jb.jpeg';
import React, { useState } from 'react';
import { Box, TextField, Select, MenuItem, Button, Grid, Typography }  from '@mui/material';
import { maxHeight } from '@mui/system';

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
    { id: 1, img: avatar, title: 'Jillian Brown'},
    { id: 1, img: avatar, title: 'Jillian Brown'},
    { id: 1, img: avatar, title: 'Jillian Brown'},
    { id: 1, img: avatar, title: 'Jillian Brown'},
    { id: 1, img: avatar, title: 'Jillian Brown'},
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
        <Grid item sx={12} sm={12} md={6}>
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
                {existingProjects.map((project) => (
                  <Grid item xs={12} sm={6} md={4}>
                    {project.title}
                    <p>{project.category}</p>
                    <img className="projectImageSize" src={project.src}></img>
                  </Grid>
                ))}
          </Box>
        </Grid>

        <Grid item sx={12} sm={12} md={6}>
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

        <Grid item sx={12} sm={12} md={6}>
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
                {aboutImages.map((about) => (
                  <Grid item xs={12} sm={6} md={4}>
                    <img className="projectImageSize" src={about.img}></img>
                  </Grid>
                ))}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Admin;