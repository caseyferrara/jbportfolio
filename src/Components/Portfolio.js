import { Grid, Box } from "@mui/material";

function Portfolio() {
    
    const classes = {
      portfolioContainer: {
        backgroundColor: '#E8EAE5',
        height: '100vh',
        fontFamily: 'Kanit',
      },
      portfolioHeader: {
      }
    };

    return (
      <div style={classes.portfolioContainer}>
        <Grid 
          container 
          direction="row" 
          spacing={2}
          rowGap={0}
          align="center"
        >
          <Grid item xs={12} sm={12}>
            <h1 style={classes.portfolioHeader}>Jillian Brown's Portfolio</h1>
          </Grid>
          <Grid item xs={12} sm={4}>
            <h2>Portfolio Item #1</h2>
            <Box
              sx={{
                borderRadius: 10,
                width: 300,
                height: 233,
                backgroundColor: '#303030',
                '&:hover': {
                  backgroundColor: '#2E282A',
                  opacity: [0.9, 0.8, 0.7],
                  transform: 'Scale(1.1)'
                },
                cursor: 'pointer',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <h2>Portfolio Item #1</h2>
            <Box
              sx={{
                borderRadius: 10,
                width: 300,
                height: 233,
                backgroundColor: '#303030',
                '&:hover': {
                  backgroundColor: '#2E282A',
                  opacity: [0.9, 0.8, 0.7],
                  transform: 'Scale(1.1)'
                },
                cursor: 'pointer',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <h2>Portfolio Item #1</h2>
            <Box
              sx={{
                borderRadius: 10,
                width: 300,
                height: 233,
                backgroundColor: '#303030',
                '&:hover': {
                  backgroundColor: '#2E282A',
                  opacity: [0.9, 0.8, 0.7],
                  transform: 'Scale(1.1)'
                },
                cursor: 'pointer',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <h2>Portfolio Item #1</h2>
            <Box
              sx={{
                borderRadius: 10,
                width: 300,
                height: 233,
                backgroundColor: '#303030',
                '&:hover': {
                  backgroundColor: '#2E282A',
                  opacity: [0.9, 0.8, 0.7],
                  transform: 'Scale(1.1)'
                },
                cursor: 'pointer',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <h2>Portfolio Item #1</h2>
            <Box
              sx={{
                borderRadius: 10,
                width: 300,
                height: 233,
                backgroundColor: '#303030',
                '&:hover': {
                  backgroundColor: '#2E282A',
                  opacity: [0.9, 0.8, 0.7],
                  transform: 'Scale(1.1)'
                },
                cursor: 'pointer',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <h2>Portfolio Item #1</h2>
            <Box
              sx={{
                borderRadius: 10,
                width: 300,
                height: 233,
                backgroundColor: '#303030',
                '&:hover': {
                  backgroundColor: '#2E282A',
                  opacity: [0.9, 0.8, 0.7],
                  transform: 'Scale(1.1)'
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