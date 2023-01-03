const insertProject = require('./src/Database/db');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(cors());
app.use(bodyParser.json());

// Set up the routes
app.post('/projects/submit', async (req, res) => {
  // Extract the project data from the request body
  const { projectTitle, projectCategory, projectDescription, projectImage } = req.body;

  // Insert the project into the database
  const project = await insertProject(projectTitle, projectCategory, projectDescription, projectImage);

  // Send the inserted project as the response
  res.json(project);
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server listening on port ${port}`));