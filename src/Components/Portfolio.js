import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.jpeg';
import img4 from '../Images/img4.jpg';
import './CSS/Style.css';
import './CSS/Animation.css';
import { Grid, Box } from "@mui/material";

function Portfolio() {

    return (
      <div className="portfolioContainer">
        <Grid 
          container 
          direction="row" 
          spacing={0}
          rowGap={0}
          align="center"
        >
          <Grid item xs={12} sm={12}>
            <h1>Jillian Brown's Portfolio</h1>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <h2>Portfolio Item #1</h2>
            <Box
              className="slide-in-left"
              component="img"
              src={img3}
              sx={{
                width: 300,
                height: 533,
                '&:hover': {
                  opacity: [0.9, 0.8, 0.7],
                  transform: 'Scale(1.05)'
                },
                cursor: 'pointer',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <h2>Portfolio Item #1</h2>
            <Box
              className="slide-in-left"
              component="img"
              src={img1}
              sx={{
                width: 300,
                height: 533,
                backgroundColor: '#303030',
                '&:hover': {
                  backgroundColor: '#2E282A',
                  opacity: [0.9, 0.8, 0.7],
                  transform: 'Scale(1.05)'
                },
                cursor: 'pointer',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <h2>Portfolio Item #1</h2>
            <Box
              className="slide-in-left"
              component="img"
              src={img2}
              sx={{
                width: 300,
                height: 533,
                backgroundColor: '#303030',
                '&:hover': {
                  backgroundColor: '#2E282A',
                  opacity: [0.9, 0.8, 0.7],
                  transform: 'Scale(1.05)'
                },
                cursor: 'pointer',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <h2>Portfolio Item #1</h2>
            <Box
              className="slide-in-left"
              component="img"
              src={img4}
              sx={{
                width: 300,
                height: 533,
                backgroundColor: '#303030',
                '&:hover': {
                  backgroundColor: '#2E282A',
                  opacity: [0.9, 0.8, 0.7],
                  transform: 'Scale(1.05)'
                },
                cursor: 'pointer',
              }}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
  
  export default Portfolio;