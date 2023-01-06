import './CSS/Style.css';
import avatar from '../Images/jb.jpeg';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState, useEffect } from 'react';
import { Modal, Dialog, DialogTitle, DialogContent, DialogActions, useMediaQuery, Snackbar, Tabs, Tab, IconButton, ImageList, ImageListItem, ImageListItemBar, Box, TextField, Select, MenuItem, Button, Grid }  from '@mui/material';
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
  const [projectImage, setProjectImage] = useState('');
  const [openModal, setModalOpen] = useState(false);
  const [value, setValue] = React.useState(0);
  const [alertMessage, setAlertMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const isMobile = useMediaQuery('(max-width: 600px)');
  const [open, setOpen] = useState(false);
  const [projectId, setProjectId] = useState(null);

  useEffect(() => {

    async function fetchData() {
      const res = await fetch('http://localhost:3001/projects');
      const data = await res.json();

      data.forEach(project => {
        setProjects(current => [...current, {
          id: project.id,
          title: project.title,
          category: project.category,
          description: project.description,
          image: `http://localhost:3001/images/${project.title}.jpg`
        }])
      });        
    }
    fetchData();

    }, []);

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
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleImageChange = (event) => {
    setProjectImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!projectTitle) {
      setAlertMessage('Please enter a project title');
      setSnackbarOpen(true);
      return;
    }
  
    if (!projectDescription) {
      setAlertMessage('Please enter a project description');
      setSnackbarOpen(true);
      return;
    }
  
    if (!projectImage) {
      setAlertMessage('Please upload an image');
      setSnackbarOpen(true);
      return;
    }
  
    const formData = new FormData();
    formData.append('projectTitle', projectTitle);
    formData.append('projectCategory', projectCategory);
    formData.append('projectDescription', projectDescription);
    formData.append('image', projectImage);
  
    try {
      const response = await fetch('http://localhost:3001/projects/submit', {
        method: 'POST',
        body: formData,
      });
  
      const project = await response.json();
      console.log(project);
  
      setProjectTitle('');
      setProjectCategory('prints');
      setProjectDescription('');
      setProjectImage('');
  
      setAlertMessage('Your project has been added!');
      setSnackbarOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmitAndReload = async (event) => {
    await handleSubmit(event);
    setModalOpen(false);
    window.location.reload();
  }
  
  
  const deleteProject = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/projects/${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        // Update the frontend to reflect the deleted project
        setProjects((prevProjects) => prevProjects.filter((project) => project.id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  function DeleteDialog({ open, onClose, onDelete }) {
    return (
      <Dialog 
        open={open} 
        onClose={onClose}
      >
        <DialogTitle
          sx={{
            color: '#303030',
            fontFamily: 'Marcellus'
          }}
        >
          Delete Project
        </DialogTitle>
        <DialogContent
          sx={{
            color: '#303030',
            fontFamily: 'Marcellus'
          }}
        >
          Are you sure you want to delete this project?
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={onClose}
            sx={{
              color: 'white',
              backgroundColor: '#303030',
              textTransform: 'lowercase',
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
            Cancel
          </Button>
          <Button 
            onClick={onDelete}
            sx={{
              color: 'white',
              backgroundColor: 'red',
              textTransform: 'lowercase',
              border: 1,
              fontFamily: 'Marcellus',
              borderColor: 'white',
              fontSize: '12px',
              margin: '5px',
              ':hover': {
                backgroundColor: 'darkred',
              },
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  const handleDeleteClick = (id) => {
    setProjectId(id);
    setOpen(true);
  };

  const handleDelete = () => {
    deleteProject(projectId);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteAndReload = async () => {
    await handleDelete();
    window.location.reload();
  }
  

  const alertClose = () => {
    setAlertMessage('');
    setSnackbarOpen(false);
  }

  const handleModalOpen = (image) => {

    setModalOpen(true);

  };

  const handleModalClose = () => {

    setModalOpen(false);

  };

  return (
      <div align="center" className='adminContainer'>
        <Grid align="center" item xs={12}>
                <h1 className='headerText tracking-in-expand'>admin</h1>
        </Grid>
        <Box 
          sx={{ 
            display: 'block',
            margin: 'auto', 
            borderBottom: 1, 
            borderColor: 'divider',
            '@media (max-width: 600px)': {
              maxWidth: 300
            }
          }}
        >
          <Tabs 
            value={value}
            onChange={handleTabChange} 
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
                textTransform: 'lowercase',
                fontFamily: 'Marcellus',
                '@media (max-width: 600px)': {
                  maxWidth: 100,
                  fontSize: '10px'
                }
              }} 
              label="existing projects" 
              {...a11yProps(0)} 
            />
            <Tab 
              sx={{ 
                display: 'block', 
                margin: 'auto',
                fontFamily: 'Marcellus',
                textTransform: 'lowercase',
                '@media (max-width: 600px)': {
                  maxWidth: 100,
                  fontSize: '10px'
                }
              }} 
              label="about images" 
              {...a11yProps(1)} 
            />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Grid container rowSpacing={2}>
              <Button
                onClick={handleModalOpen}
                size="large"
                sx={{
                  color: 'white',
                  backgroundColor: '#303030',
                  textTransform: 'lowercase',
                  fontFamily: 'Marcellus',
                  borderColor: 'white',
                  fontSize: '12px',
                  display: 'block',
                  margin: 'auto',
                  ':hover': {
                    backgroundColor: '#3f3f3f',
                  },
                }}
              >
                add a new project
              </Button>
            <Box
              sx={{
                width: 1000,
                display: 'block', 
                margin: 'auto', 
              }}
              >
                <ImageList sx={{ maxWidth: 900 }} variant="masonry" cols={isMobile ? 1 : 2} gap={8}>
                  {projects.map((project) => (
                      <ImageListItem key={project.id}>
                        <img
                          className="slide-in-left"
                          src={project.image}
                          srcSet={project.image}
                          alt={project.category}
                          loading="lazy"
                        />
                        <ImageListItemBar
                          title={project.title}
                          subtitle={project.category}
                          className="slide-in-left"
                          actionIcon={
                            <IconButton
                              onClick={() => handleDeleteClick(project.id)}
                              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                              aria-label={`info about ${project.title}`}
                            >
                              <DeleteIcon 
                                sx={{
                                  color: 'red'
                                }}
                              />
                            </IconButton>
                          }
                        />
                      </ImageListItem>
                    ))}
                </ImageList>
                <Modal
                  open={openModal}
                  onClose={handleModalClose}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                  className="modal-container"
                >
                  <div className='modal'>
                    <Grid container rowSpacing={2}>
                      <Box>
                        <Grid  align="center" container spacing={3}>
                          <Grid item xs={12}>
                            <h1>add a new project</h1>
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              label="project title"
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
                                label="project category"
                                name="projectCategory"
                                value={projectCategory}
                                onChange={handleChange}
                                sx={{
                                  fontFamily: 'Marcellus',
                                  width: 250,
                                }}
                              >
                                <MenuItem 
                                  value="prints"
                                  sx={{
                                    fontFamily: 'Marcellus',
                                    color: '#303030'
                                  }}
                                >
                                  prints
                                </MenuItem>
                                <MenuItem 
                                  value="personal"
                                  sx={{
                                    fontFamily: 'Marcellus',
                                    color: '#303030'
                                  }}
                                >
                                  personal
                                </MenuItem>
                                <MenuItem 
                                  value="logos"
                                  sx={{
                                    fontFamily: 'Marcellus',
                                    color: '#303030'
                                  }}
                                >
                                  logos
                                </MenuItem>
                                <MenuItem 
                                  value="other"
                                  sx={{
                                    fontFamily: 'Marcellus',
                                    color: '#303030'
                                  }}
                                >
                                  other
                                </MenuItem>
                              </Select>
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                label="project description"
                                name="projectDescription"
                                variant="filled"
                                value={projectDescription}
                                onChange={handleChange}
                                multiline={true}
                                rows={3}
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
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                              <Button 
                                onClick={handleSubmitAndReload}
                                size="large"
                                sx={{
                                  color: 'white',
                                  backgroundColor: '#303030',
                                  textTransform: 'lowercase',
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
                            <Snackbar open={snackbarOpen} message={alertMessage} autoHideDuration={3000} onClose={alertClose} />
                        </Grid>
                      </Box>
                    </Grid>
                  </div>
                </Modal>
                <DeleteDialog open={open} onClose={handleClose} onDelete={handleDeleteAndReload} />
            </Box>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
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