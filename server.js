const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const { insertProject, getProjects } = require('./src/Database/db');

app.use(cors());
app.use(bodyParser.json());




app.get('/projects', async (req, res) => {
  try {
    const projects = await getProjects();
    projects.forEach((project) => {
      project.image = `data:image/png;base64,${Buffer.from(project.image).toString('base64')}`;
    });
    res.json(projects);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.post('/projects/submit', async (req, res) => {

  const { projectTitle, projectCategory, projectDescription, projectImage } = req.body;

  const project = await insertProject(projectTitle, projectCategory, projectDescription, projectImage);

  res.json(project);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server listening on port ${port}`));