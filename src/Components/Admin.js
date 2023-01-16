import './CSS/Style.css';
import Footer from './Footer';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DangerousIcon from '@mui/icons-material/Dangerous';
import React, { useState, useEffect } from 'react';
import { CircularProgress, Typography, Avatar, Modal, Dialog, DialogTitle, DialogContent, DialogActions, useMediaQuery, Snackbar, Tabs, Tab, IconButton, ImageList, ImageListItem, ImageListItemBar, Box, TextField, Select, MenuItem, Button, Grid }  from '@mui/material';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';

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

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const token = urlParams.get('token');
  let decoded;
  let email;
  let photo;
  let name;
  if (token) {
     decoded = jwtDecode(token);
     email = decoded.email;
     photo = decoded.image;
     name = decoded.name;
  }
  const [users, setUsers] = useState([]);
  const user = users.find(user => user.email === email) ? users.find(user => user.email === email) : null;
  const [isLoading, setIsLoading] = useState(true);

  const [projects, setProjects] = useState([]);
  const [projectId, setProjectId] = useState(null);
  const [projectTitle, setProjectTitle] = useState('');
  const [projectCategory, setProjectCategory] = useState('prints');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectImage, setProjectImage] = useState('');
  const [aboutImages, setAboutImages] = useState([]);
  const [aboutImage, setAboutImage] = useState('');
  const [imageTitle, setImageTitle] = useState('');
  const [itemType, setItemType] = useState('');
  const [itemId, setItemId] = useState(null);
  const [modalOpen, setModalOpen] = useState({
    projectModal: false,
    projectEditModal: false,
    aboutModal: false,
  });
  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState(0);

  const [alertMessage, setAlertMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const isMobile = useMediaQuery('(max-width: 600px)');


  useEffect(() => {

      async function fetchUserData() {
        const res = await fetch('http://localhost:3001/users');
        const data = await res.json();

        data.forEach(user => {
          setUsers(current => [...current, {
            id: user.id,
            email: user.email
          }])
        });
      }

      async function fetchProjectData() {
        const res = await fetch('http://localhost:3001/admin/projects');
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

      async function fetchAboutData() {
        const res = await fetch('http://localhost:3001/admin/about');
        const data = await res.json();

        data.forEach(about => {
          setAboutImages(current => [...current, {
            id: about.id,
            title: about.title,
            image: `http://localhost:3001/images/${about.title}.jpg`
          }])
        });        
      }

      fetchUserData();
      fetchProjectData();
      fetchAboutData();
      setIsLoading(false);
    

  }, []);
  

  const alertClose = () => {
    setAlertMessage('');
    setSnackbarOpen(false);
  }

  const handleModalOpen = (modalName) => {
    setModalOpen({
      ...modalOpen,
      [modalName]: true,
    });
  };
  
  const handleModalClose = (modalName) => {
    setModalOpen({
      ...modalOpen,
      [modalName]: false,
    });
  };

  const handleInputChange = (event) => {
    if (event.target.name === 'projectTitle') {
      setProjectTitle(event.target.value);
    } else if (event.target.name === 'projectCategory') {
      setProjectCategory(event.target.value);
    } else if (event.target.name === 'projectDescription') {
      setProjectDescription(event.target.value);
    } else if (event.target.name === 'imageTitle') {
      setImageTitle(event.target.value);
    }
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleImageChange = (event) => {
    setProjectImage(event.target.files[0]);
  };

  const handleAboutImageChange = (event) => {
    setAboutImage(event.target.files[0]);
  };

  const handleProjectSubmit = async (event) => {
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
    formData.append('type', 'project');
    formData.append('projectTitle', projectTitle);
    formData.append('projectCategory', projectCategory);
    formData.append('projectDescription', projectDescription);
    formData.append('image', projectImage);
  
    try {
      const response = await fetch('http://localhost:3001/admin/projects/submit', {
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
      setTimeout(reloadPage, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAboutSubmit = async (event) => {
    event.preventDefault();
  
    if (!aboutImage) {
      setAlertMessage('Please upload an image');
      setSnackbarOpen(true);
      return;
    }
  
    const formData = new FormData();
    formData.append('type', 'about');
    formData.append('imageTitle', imageTitle);
    formData.append('image', aboutImage);
    
    try {
      const response = await fetch('http://localhost:3001/admin/about/submit', {
        method: 'POST',
        body: formData,
      });
  
      const about = await response.json();
      console.log(about);
  
    } catch (error) {
      console.error(error);
    }

    setAboutImage('');
    setImageTitle('');
    setAlertMessage('Your about image has been added!');
    setSnackbarOpen(true);
    setTimeout(reloadPage, 3000);
  };

  const reloadPage = () => {
    window.location.reload();
  }

  const handleEditClick = async (id) => {
      try {
        const response = await fetch(`http://localhost:3001/project/${id}`, {
          method: 'GET',
        });
        
        if (response.ok) {
          const project = await response.json();
          setProjectId(project.id);
          setProjectTitle(project.title);
          setProjectCategory(project.category);
          setProjectDescription(project.description);
        }
      } catch (error) {
        console.error(error);
      }
      handleModalOpen('projectEditModal');

  }

  const handleEditSubmit = async (event, id) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:3001/admin/project/update/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          projectTitle: projectTitle,
          projectCategory: projectCategory,
          projectDescription: projectDescription,
        }),
      });
  
      if (response.ok) {
        const updatedProject = await response.json();
        console.log(updatedProject);
  
        setProjects(prevProjects => prevProjects.map(project => {
          if (project.id === id) {
            return updatedProject;
          }
          return project;
        }));
  
        setProjectTitle('');
        setProjectCategory('prints');
        setProjectDescription('');
  
        setAlertMessage('Your project has been updated!');
        setSnackbarOpen(true);
        setTimeout(reloadPage, 3000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  function DeleteDialog({ open, onClose, onDelete }) {

    let itemTypeText;
    switch (itemType) {
      case "project":
        itemTypeText = "project";
        break;
      case "about image":
        itemTypeText = "about image";
        break;
      default:
        itemTypeText = "invalid";
        break;
    }

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
          delete {itemTypeText}
        </DialogTitle>
        <DialogContent
          sx={{
            color: '#303030',
            fontFamily: 'Marcellus'
          }}
        >
          are you sure you want to delete this {itemTypeText}?
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

  const deleteProject = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/admin/projects/${id}`, {
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

  const deleteAboutImage = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/admin/about/${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        setAboutImages((prevAbout) => prevAbout.filter((about) => about.id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteItem = async (id, itemType) => {
    switch (itemType) {
      case "project":
        await deleteProject(id);
        break;
      case "about image":
        await deleteAboutImage(id);
        break;
      default:
        console.error(`Unrecognized item type: ${itemType}`);
    }
  };

  const handleDeleteClick = (id, itemType) => {
    setItemType(itemType);
    setItemId(id);
    setOpen(true);
  };

  const handleDelete = () => {
    deleteItem(itemId, itemType);
    setOpen(false);
  };

  const handleDeleteClose = () => {
    setOpen(false);
  };

  const projectModalOpen = () => {
      handleModalOpen('projectModal');
  }
  
  const projectModalClose = () => {
      handleModalClose('projectModal')
  }

  const projectEditModalClose = () => {
      handleModalClose('projectEditModal')
  }

  const aboutModalOpen = () => {
    handleModalOpen('aboutModal');
  }

  const aboutModalClose = () => {
      handleModalClose('aboutModal')
  }

  return (
    isLoading
    ?
    <div className='loadingContainer'>
      <CircularProgress size="20vh" sx={{ color: "#303030" }}/>
    </div>
    :
    (
    user !== null
    ?
    <div align="center" className='adminContainer'>
    <Grid align="center" container>
        <Grid item xs={12}>
          <Avatar 
            src={photo}
            alt="Google Photo"
            sx={{
              marginTop: 1
            }}
          />
        </Grid>
        <Grid item xs={12}>
            <Typography
              sx={{
                fontFamily: 'Marcellus',
                '@media (max-width: 600px)': {
                  fontSize: 10
                }
              }}
            >
              Welcome back, {name}! <a href="/" style={{ textDecoration: 'underline', color: 'inherit' }}>Sign Out?</a>
            </Typography>
        </Grid>
    </Grid>
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
        textColor="inherit"
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
        <Box
          sx={{
            width: 1000,
            display: 'block', 
            margin: 'auto', 
          }}
          >
            <Button
              onClick={projectModalOpen}
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
            <ImageList sx={{ maxWidth: 900 }} variant="masonry" cols={isMobile ? 1 : 2} gap={8}>
              {projects.map((project) => (
                  <ImageListItem key={project.id}>
                    <img
                      className="slide-in-left"
                      src={project.image}
                      alt={project.category}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      title={project.title}
                      subtitle={project.category}
                      className="slide-in-left"
                      actionIcon={
                        <>
                          <IconButton
                            onClick={() => handleEditClick(project.id)}
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`edit ${project.title}`}
                          >
                            <EditIcon 
                              sx={{
                                color: 'rgba(255, 255, 255, 0.54)'
                              }}
                            />
                          </IconButton>
                          <IconButton
                          onClick={() => handleDeleteClick(project.id, "project")}
                          sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                          aria-label={`info about ${project.title}`}
                          >
                            <DeleteIcon 
                              sx={{
                                color: 'red'
                              }}
                            />
                          </IconButton>
                        </>
                      }
                    />
                  </ImageListItem>
                ))}
            </ImageList>
            <Modal
              open={modalOpen.projectModal}
              onClose={projectModalClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              className="modal-container"
            >
              <div className='modal-admin'>
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
                          onChange={handleInputChange}
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
                            onChange={handleInputChange}
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
                            onChange={handleInputChange}
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
                            onClick={handleProjectSubmit}
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
            <Modal
              open={modalOpen.projectEditModal}
              onClose={projectEditModalClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              className="modal-container"
            >
              <div className='modal-admin'>
                <Grid container rowSpacing={2}>
                  <Box>
                    <Grid  align="center" container spacing={3}>
                      <Grid item xs={12}>
                        <h1>edit this project</h1>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="project title"
                          name="projectTitle"
                          variant="filled"
                          value={projectTitle}
                          onChange={handleInputChange}
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
                            onChange={handleInputChange}
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
                            onChange={handleInputChange}
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
                          <Button 
                            onClick={(event) => handleEditSubmit(event, projectId)}
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
                            save project
                          </Button>
                        </Grid>
                        <Snackbar open={snackbarOpen} message={alertMessage} autoHideDuration={3000} onClose={alertClose} />
                    </Grid>
                  </Box>
                </Grid>
              </div>
            </Modal>
        </Box>
      </Grid>
    </TabPanel>
    <DeleteDialog open={open} onClose={handleDeleteClose} onDelete={handleDelete} />
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
            <Button
              onClick={aboutModalOpen}
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
              add a new about image
            </Button>
            <ImageList sx={{ maxWidth: 900 }} variant="masonry" cols={isMobile ? 1 : 2} gap={8}>
              {aboutImages.map((about) => (
                <ImageListItem key={about.id}>
                  <img
                    src={about.image}
                    alt={about.title}
                    loading="lazy"
                  />
                    <ImageListItemBar
                      title={about.title}
                      className="slide-in-left"
                      actionIcon={
                        <IconButton
                          onClick={() => handleDeleteClick(about.id, "about image")}
                          sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                          aria-label={`info about ${about.title}`}
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
              open={modalOpen.aboutModal}
              onClose={aboutModalClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              className="modal-container"
            >
              <div className='modal-admin-about'>
                <Grid container rowSpacing={2}>
                  <Box>
                    <Grid  align="center" container spacing={3}>
                      <Grid item xs={12}>
                        <h1>add a new about image</h1>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="image title"
                          name="imageTitle"
                          variant="filled"
                          value={imageTitle}
                          onChange={handleInputChange}
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
                                  onChange={handleAboutImageChange}
                              />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          onClick={handleAboutSubmit}
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
                          submit
                        </Button>
                      </Grid>
                      <Snackbar open={snackbarOpen} message={alertMessage} autoHideDuration={3000} onClose={alertClose} />
                    </Grid>
                  </Box>
                </Grid>
              </div>
            </Modal>
        </Box>
      </Grid>
    </TabPanel>
    <Footer />
    </div>
    :
    <div className='noAccessContainer'>
      <Grid align="center" container>
        <Grid item xs={12}>
          <DangerousIcon 
            sx={{
              height: 150,
              width: 150,
              color: 'red'
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <h1>You are not authorized</h1>
        </Grid>
      </Grid>
    </div>
    )
  );
}

export default Admin;