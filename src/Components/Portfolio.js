import { Grid, Box } from "@mui/material";

function Portfolio() {
    
    const classes = {
      portfolioContainer: {
        backgroundColor: '#E3E3E3',
        height: '100vh',
        fontFamily: 'Kanit',
      },
      portfolioHeader: {
        backgroundColor: 'white',
        borderRadius: 5,
      }
    };

    return (
      <div style={classes.portfolioContainer}>
        <Grid 
          container 
          direction="row" 
          spacing={2}
          rowGap={6}
          align="center"
        >
          <Grid item xs={12} sm={12}>
            <h1 style={classes.portfolioHeader}>Jillian Brown's Portfolio</h1>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Box
              sx={{
                borderRadius: 5,
                width: 200,
                height: 200,
                backgroundColor: '#2E282A',
                '&:hover': {
                  backgroundColor: '#2E282A',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <Box
              sx={{
                borderRadius: 5,
                width: 200,
                height: 200,
                backgroundColor: '#2E282A',
                '&:hover': {
                  backgroundColor: '#2E282A',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                borderRadius: 5,
                width: 200,
                height: 200,
                backgroundColor: '#2E282A',
                '&:hover': {
                  backgroundColor: '#2E282A',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <Box
              sx={{
                borderRadius: 5,
                width: 200,
                height: 200,
                backgroundColor: '#2E282A',
                '&:hover': {
                  backgroundColor: '#2E282A',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <Box
              sx={{
                borderRadius: 5,
                width: 200,
                height: 200,
                backgroundColor: '#2E282A',
                '&:hover': {
                  backgroundColor: '#2E282A',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  borderRadius: 5,
                  width: 200,
                  height: 200,
                  backgroundColor: '#2E282A',
                  '&:hover': {
                    backgroundColor: '#2E282A',
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              />
          </Grid>
        </Grid>
      </div>
    );
  }
  
  export default Portfolio;