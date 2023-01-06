import './CSS/Style.css';
import './CSS/Animation.css';
import InfoIcon from '@mui/icons-material/Info';
import React, { useState, useEffect } from 'react';
import { Pagination, useMediaQuery, IconButton, Box, ImageList, ImageListItem, ImageListItemBar, MenuItem, FormControl, Select, Modal, Button } from '@mui/material';
import { Element } from 'react-scroll';

function Portfolio() {

  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [modalImage, setModalImage] = useState({});
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all graphics');
  const [openModal, setModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;
  const isMobile = useMediaQuery('(max-width: 600px)');
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {

    setPage(value);

  };

  const handleCategoryChange = (event) => {

    setSelectedCategory(event.target.value);

  };

  const handleModalOpen = (image) => {

    setModalImage(image);
    setModalOpen(true);

  };
    
  const handleModalClose = () => {

    setModalOpen(false);

  };

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

      setCategories(['all graphics','prints', 'personal', 'logos', 'other']);

  }, []);

  useEffect(() => {
    if (selectedCategory === 'all graphics') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === selectedCategory)
      );
    }
  }, [projects, selectedCategory]);

  return (
    <Element id="portfolio">
      <div className="allContainer">
        <div align="center">
          <div className="headerText tracking-in-expand">
            portfolio
          </div>
          <FormControl
            sx={{
              padding: '1rem',
              color: '#303030',
              width: '250px',
            }}
          >
            <Select
              value={selectedCategory}
              onChange={handleCategoryChange}
              sx={{
                fontFamily: 'Marcellus',
                color: '#303030',
                border: 1,
              }}
            >
              {categories.map((category) => (
                <MenuItem 
                  value={category} 
                  key={category}
                  sx={{
                    fontFamily: 'Marcellus',
                  }}
                >
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
            <>
              <Box
                sx={{
                  maxHeight: 700,
                  maxWidth: 1000,
                  display: 'block',
                  margin: 'auto',
                  overflowY: 'scroll',
                  scrollbarWidth: 'none',
                  '@media (max-width: 600px)': {
                    maxHeight: 600,
                    maxWidth: 300,
                  },
                }}
              >
                <ImageList variant="masonry" cols={isMobile ? 1 : 2} gap={8}>
                  {currentProjects.map((project) => (
                    <ImageListItem key={project.id}>
                      <img
                        className="slide-in-left"
                        src={project.image}
                        alt={project.category}
                        loading="lazy"
                      />
                      <ImageListItemBar
                        className="slide-in-left"
                        title={project.title}
                        subtitle={project.category}
                        sx={{
                          fontFamily: 'Marcellus',
                        }}
                        actionIcon={
                          <IconButton
                            onClick={() => handleModalOpen(project, 'single')}
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
                <Pagination
                      variant="outlined" 
                      shape="rounded"
                      count={Math.ceil(filteredProjects.length / itemsPerPage)}
                      page={page}
                      onChange={handlePageChange}
                      sx={{
                        paddingTop: 3,
                        '@media (max-width: 600px)': {
                          paddingTop: 2
                        },
                      }}
                />
            </>

          <Modal
            open={openModal}
            onClose={handleModalClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            className="modal-container"
          >
            <div className="modal">
              <h2 className="tracking-in-expand" id="simple-modal-title">{modalImage.title}</h2>
                <img
                  src={`${modalImage.image}`}
                  alt={modalImage.category}
                  loading="lazy"
                  className="slide-in-left modal-image"
                />
              <h3 className="tracking-in-expand" id="simple-modal-title">{modalImage.category}</h3>
              <p align="center">{modalImage.description}</p>
              <Button 
                onClick={handleModalClose}
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
                Close
              </Button>
            </div>
          </Modal>
        </div>
      </div>
    </Element>
);
}

export default Portfolio;