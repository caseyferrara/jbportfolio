import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.jpeg';
import img4 from '../Images/img4.jpg';
import avatar from '../Images/jb.jpeg';
import InfoIcon from '@mui/icons-material/Info';
import React, { useState } from 'react';
import { Tabs, Tab, IconButton, ImageList, ImageListItem, ImageListItemBar, Box, TextField, Select, MenuItem, Button, Grid }  from '@mui/material';
import PropTypes from 'prop-types';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
            <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Admin = () => {

  const [projectTitle, setProjectTitle] = useState('');
  const [projectCategory, setProjectCategory] = useState('prints');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectImage, setProjectImage] = useState(null);
  const [value, setValue] = React.useState(0);
  
  

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
    } else if (event.target.name === 'projectDescription') {
      setProjectDescription(event.target.value);
    }
    console.log(projectTitle);
    console.log(projectDescription);
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleImageChange = (event) => {
    setProjectImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send a POST request to the server
    fetch('http://localhost:3001/projects/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ projectTitle, projectCategory, projectDescription, projectImage }),
    })
    .then(res => res.json())
    .then(project => console.log(project));
  };
  

  return (
      <div className='adminContainer'>
        <Grid align="center" item xs={12}>
                <h1 className='headerText tracking-in-expand'>Admin Page</h1>
        </Grid>
        <Box sx={{ display: 'block', margin: 'auto', width: 1200, borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={value}
            onChange={handleTabChange} 
            aria-label="basic tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#303030",
              }
            }}
          >
            <Tab 
              sx={{ 
                display: 'block', 
                margin: 'auto',
                fontFamily: 'Marcellus'
              }} 
              label="Add a project" 
              {...a11yProps(0)} 
            />
            <Tab 
              sx={{ 
                display: 'block', 
                margin: 'auto',
                fontFamily: 'Marcellus'
              }} 
              label="View existing projects" 
              {...a11yProps(1)} 
            />
            <Tab 
              sx={{ 
                display: 'block', 
                margin: 'auto',
                fontFamily: 'Marcellus'
              }} 
              label="View about images" 
              {...a11yProps(2)} 
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Grid container rowSpacing={2}>
            <Box
              sx={{
                width: 1000,
                display: 'block', 
                margin: 'auto', 
              }}
            >
              <Grid  align="center" container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    label="Project Title"
                    name="projectTitle"
                    variant="filled"
                    value={projectTitle}
                    onChange={handleChange}
                    InputProps={{
                      style: {
                        fontFamily: 'Marcellus',
                        width: 250
                      }
                    }}
                    InputLabelProps={{
                      style: {
                        fontFamily: 'Marcellus',
                        color: '#303030'
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                    <Select
                      label="Project Category"
                      name="projectCategory"
                      value={projectCategory}
                      onChange={handleChange}
                      sx={{
                        fontFamily: 'Marcellus',
                        width: 250
                      }}
                    >
                      <MenuItem 
                        value="prints"
                        sx={{
                          fontFamily: 'Marcellus',
                          color: '#303030'
                        }}
                      >
                        Prints
                      </MenuItem>
                      <MenuItem 
                        value="personal"
                        sx={{
                          fontFamily: 'Marcellus',
                          color: '#303030'
                        }}
                      >
                        Personal
                      </MenuItem>
                      <MenuItem 
                        value="logos"
                        sx={{
                          fontFamily: 'Marcellus',
                          color: '#303030'
                        }}
                      >
                        Logos
                      </MenuItem>
                      <MenuItem 
                        value="other"
                        sx={{
                          fontFamily: 'Marcellus',
                          color: '#303030'
                        }}
                      >
                        Other
                      </MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Project Description"
                      name="projectDescription"
                      variant="filled"
                      value={projectDescription}
                      onChange={handleChange}
                      multiline={true}
                      rows={3}
                      InputProps={{
                        style: {
                          fontFamily: 'Marcellus',
                          width: 500
                        }
                      }}
                      InputLabelProps={{
                        style: {
                          fontFamily: 'Marcellus',
                          color: '#303030'
                        }
                      }}
                    />
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
                      size="large"
                      sx={{
                        color: 'white',
                        backgroundColor: '#303030',
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
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container rowSpacing={2}>
            <Box
              sx={{
                width: 1000,
                display: 'block', 
                margin: 'auto', 
              }}
              >
                <ImageList sx={{ maxWidth: 900 }} variant="masonry" cols={3} gap={8}>
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
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid container rowSpacing={2}>
            <Box
              align="center"
              sx={{
                width: 1000,
                display: 'block', 
                margin: 'auto', 
              }}
              >
                <ImageList sx={{ maxWidth: 900 }} variant="masonry" cols={3} gap={8}>
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
        </TabPanel>
    </div>
  );
};

export default Admin;