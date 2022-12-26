import './CSS/Style.css';
import './CSS/Animation.css';
import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.jpeg';
import img4 from '../Images/img4.jpg';
import React, { useState, useEffect } from 'react';
import { Box, ImageList, ImageListItem, ImageListItemBar, Grid, MenuItem, FormControl, Select, Modal, Button } from '@mui/material';

function Portfolio() {

  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All Graphics');
  const [openModal, setModalOpen] = useState(false);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };
    
  const handleModalClose = () => {
    setModalOpen(false);
  };

  useEffect(() => {

    setImages([
      { id: 1, category: 'Brand Design', src: img1},
      { id: 2, category: 'Brand Design', src: img2},
      { id: 3, category: 'Brand Design', src: img3},
      { id: 4, category: 'Brand Design', src: img4},
      { id: 5, category: 'Personal', src: img1},
      { id: 6, category: 'Personal', src: img2},
      { id: 7, category: 'Other', src: img3},
      { id: 8, category: 'Other', src: img4},
      { id: 9, category: 'Personal', src: img1},
      { id: 10, category: 'Personal', src: img2},
      { id: 11, category: 'Brand Design', src: img1},
      { id: 12, category: 'Brand Design', src: img2},
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
  
    <div className="portfolioContainer">
      <div 
        align="center" 
        className="svgContainerHeader"
      >
        <div className="portfolioHeader">
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
                onClick={handleModalOpen}
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
          <Box sx={ { maxHeight: 500, maxWidth: 1000, display: 'block', margin: 'auto', overflowY: 'scroll' } }>
            <ImageList variant="masonry" cols={3} gap={8}>
              {filteredImages.slice(0, 8).map((image) => (
                <ImageListItem key={image.id}>
                  <img
                    src={`${image.src}?w=248&fit=crop&auto=format`}
                    srcSet={`${image.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={image.category}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Grid>
        <Modal
          open={openModal}
          onClose={handleModalClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className="modal-container"
        >
          <div className="modal">
            <h2 className="modal-title" id="simple-modal-title">{selectedCategory}</h2>
            <p className="modal-description" id="simple-modal-description">
            <ImageList variant='woven' cols={2} gap={8}>
              {filteredImages.map((image) => (
                <ImageListItem key={image.id}>
                    <img
                      src={`${image.src}?w=161&fit=crop&auto=format`}
                      srcSet={`${image.src}?w=161&fit=crop&auto=format&dpr=2 2x`}
                      alt={image.category}
                      loading="lazy"
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
      </div>
    </div>
);
}

export default Portfolio;