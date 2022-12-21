import './CSS/Style.css';
import './CSS/Animation.css';
import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.jpeg';
import img4 from '../Images/img4.jpg';
import React, { useState, useEffect } from 'react';
import { MenuItem, FormControl, Select, Modal, Button } from '@mui/material';

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
        <div className="svgContainerHeader">
          <svg className="svgPortfolio" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shapeFill"></path>
          </svg>
        </div>

      <div align="center">
        <FormControl
          sx={{
            padding: '1rem',
            color: 'white',
            width: '250px',
          }}
        >
          <Select
            value={selectedCategory}
            onChange={handleCategoryChange}
            sx={{
              fontFamily: 'Marcellus',
              color: 'white',
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
          {filteredImages.length > 10 && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleModalOpen}
                sx={{
                  backgroundColor: 'transparent',
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
                View All
              </Button>
          )}
        </FormControl>
      </div>

      <div className='grid-container' align='center'>
            {filteredImages.slice(0, 10).map((image) => (
              <div key={image.id}>
                <img className="portImg slide-in-left" src={image.src} alt={image.category} />
              </div>
            ))}
      </div>
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
              {filteredImages.map((image) => (
                <img className="modal-image" src={image.src} alt={image.category} />
              ))}
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
);
}

export default Portfolio;