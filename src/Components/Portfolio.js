import './CSS/Style.css';
import './CSS/Animation.css';
import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.jpeg';
import img4 from '../Images/img4.jpg';
import InfoIcon from '@mui/icons-material/Info';
import React, { useState, useEffect } from 'react';
import { useMediaQuery, IconButton, Box, ImageList, ImageListItem, ImageListItemBar, Grid, MenuItem, FormControl, Select, Modal, Button } from '@mui/material';
import { Element } from 'react-scroll';

function Portfolio() {

  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [modalImage, setModalImage] = useState({});
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All Graphics');
  const [openModal, setModalOpen] = useState(false);
  const [openViewAllModal, setViewAllModalOpen] = useState(false);

  const isMobile = useMediaQuery('(max-width: 600px)');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleModalOpen = (image, modalType) => {
    if (modalType === 'viewAll') {
      setViewAllModalOpen(true);
    } else {
      setModalImage(image);
      setModalOpen(true);
    }
  };
    
  const handleModalClose = () => {
    setModalOpen(false);
    setViewAllModalOpen(false);
  };

  useEffect(() => {

    setImages([
      { id: 1, title: 'A wonderful piece of art', category: 'Brand Design', src: img1},
      { id: 2, title: 'This looks really cool', category: 'Brand Design', src: img2},
      { id: 3, title: 'I cant believe I made this', category: 'Brand Design', src: img3},
      { id: 4, title: 'Please look at this!', category: 'Brand Design', src: img4},
      { id: 5, title: 'A wonderful piece of art', category: 'Personal', src: img1},
      { id: 6, title: 'This looks really cool', category: 'Personal', src: img2},
      { id: 7, title: 'I cant believe I made this', category: 'Other', src: img3},
      { id: 8, title: 'Please look at this!', category: 'Other', src: img4},
      { id: 9, title: 'A wonderful piece of art', category: 'Personal', src: img1},
      { id: 10, title: 'This looks really cool', category: 'Personal', src: img2},
      { id: 11, title: 'I cant believe I made this', category: 'Brand Design', src: img1},
      { id: 12, title: 'Please look at this!', category: 'Brand Design', src: img2},
      { id: 13, category: 'Other', src: img3},
      { id: 14, category: 'Other', src: img4},
    ]);
    setCategories(['All Graphics','Brand Design', 'Personal', 'Other']);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All Graphics') {
      setFilteredImages(images);
    } else {
      setFilteredImages(
        images.filter((image) => image.category === selectedCategory)
      );
    }
  }, [images, selectedCategory]);

  return (
    <Element id="portfolio">
      <div className="allContainer">
        <div align="center">
          <div className="headerText text-shadow-pop-top">
            PORTFOLIO
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
            {filteredImages.length > 8 && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleModalOpen(null, 'viewAll')}
                  sx={{
                    backgroundColor: '#303030',
                    border: 1,
                    fontFamily: 'Marcellus',
                    borderColor: '#303030',
                    fontSize: '12px',
                    margin: '5px',
                    ':hover': {
                      backgroundColor: '#3f3f3f',
                    },
                  }}
                >
                  View All
                </Button>
            )}
          </FormControl>
          <Grid container rowGap={2}>
            <Box 
              className="scroll"
              sx={{ 
                maxHeight: 600, 
                maxWidth: 1000, 
                display: 'block', 
                margin: 'auto', 
                overflowY: 'scroll',
                "@media (max-width: 600px)": {
                  maxHeight: 700, 
                  maxWidth: 300
                }
              }}
            >
              <ImageList variant="masonry" cols={isMobile ? 1 : 2} gap={8}>
                {filteredImages.slice(0, 8).map((image) => (
                  <ImageListItem key={image.id}>
                    <img
                      className="slide-in-left"
                      src={`${image.src}?w=248&fit=crop&auto=format`}
                      srcSet={`${image.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={image.category}
                      loading="lazy"
                    />
                  <ImageListItemBar
                      className="slide-in-left"
                      title={image.title}
                      subtitle={image.category}
                      sx={{
                        fontFamily: 'Marcellus',
                      }}
                      actionIcon={
                        <IconButton
                          onClick={() => handleModalOpen(image, 'single')}
                          sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                          aria-label={`info about ${image.title}`}
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
          <Modal
            open={openViewAllModal}
            onClose={handleModalClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            className="modal-container"
          >
            <div className="modal">
              <h2 className="modal-title" id="simple-modal-title">{selectedCategory}</h2>
              <p className="modal-description" id="simple-modal-description">
              <ImageList variant='masonry' cols={2} gap={8}>
                {filteredImages.map((image) => (
                  <ImageListItem key={image.id}>
                      <img
                        src={`${image.src}?w=161&fit=crop&auto=format`}
                        srcSet={`${image.src}?w=161&fit=crop&auto=format&dpr=2 2x`}
                        alt={image.category}
                        loading="lazy"
                        className="slide-in-left"
                      />
                  </ImageListItem>
                ))}
              </ImageList>
              </p>
              <Button 
                onClick={handleModalClose}
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
                Close
              </Button>
            </div>
          </Modal>

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
                  src={`${modalImage.src}`}
                  srcSet={`${modalImage.src}`}
                  alt={modalImage.category}
                  loading="lazy"
                  className="slide-in-left modal-image"
                />
              <h3 className="tracking-in-expand" id="simple-modal-title">{modalImage.category}</h3>
              <p align="center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <Button 
                onClick={handleModalClose}
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