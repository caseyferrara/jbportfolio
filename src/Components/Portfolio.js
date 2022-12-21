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
                <svg className="svgHeader" id="svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 0,500 C 0,500 0,166 0,166 C 118.89952153110048,145.86602870813397 237.79904306220095,125.73205741626795 321,114 C 404.20095693779905,102.26794258373205 451.7033492822966,98.93779904306218 532,109 C 612.2966507177034,119.06220095693782 725.3875598086123,142.51674641148327 844,167 C 962.6124401913877,191.48325358851673 1086.7464114832537,216.99521531100478 1187,217 C 1287.2535885167463,217.00478468899522 1363.6267942583731,191.5023923444976 1440,166 C 1440,166 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#303030" fill-opacity="0.53" transform="rotate(-180 720 250)"></path>
                  <path d="M 0,500 C 0,500 0,333 0,333 C 66.00956937799043,306.55023923444975 132.01913875598086,280.1004784688995 237,285 C 341.98086124401914,289.8995215311005 485.93301435406704,326.14832535885165 590,323 C 694.066985645933,319.85167464114835 758.2488038277513,277.3062200956938 858,272 C 957.7511961722487,266.6937799043062 1093.0717703349283,298.6267942583732 1196,315 C 1298.9282296650717,331.3732057416268 1369.4641148325359,332.18660287081343 1440,333 C 1440,333 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#303030" fill-opacity="1" transform="rotate(-180 720 250)"></path>
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