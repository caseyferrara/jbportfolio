import { Grid, Box } from "@mui/material";

function Portfolio() {
    
    const classes = {
      portfolioContainer: {
        backgroundColor: '#E3E3E3',
        height: '100vh',
        fontFamily: 'Kanit',
      },
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
          <Grid item xs={4}>
            <Box
              sx={{
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
          <Grid item xs={4}>
            <Box
              sx={{
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
          <Grid item xs={4}>
            <Box
              sx={{
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
          <Grid item xs={4}>
            <Box
              sx={{
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
          <Grid item xs={4}>
            <Box
              sx={{
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
          <Grid item xs={4}>
              <Box
                sx={{
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
          <Grid item xs={4}>
              <Box
                sx={{
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
          <Grid item xs={4}>
              <Box
                sx={{
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
          <Grid item xs={4}>
              <Box
                sx={{
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