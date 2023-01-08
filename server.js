const multer = require('multer');
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

const { insertProject, insertAboutImage, getProjects, getAbout, deleteProject, getProjectById, getAboutById } = require('./src/Database/db');

app.use(cors());

app.use('/images', express.static('./src/Images'));

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './src/Images');
  },
  filename: function(req, file, cb) {
    let field;
    if (req.body.type === 'project') {
      field = req.body.projectTitle;
    } else if (req.body.type === 'about') {
      field = req.body.imageTitle;
    }
    cb(null, `${field}`);
  }
});

const upload = multer({ storage: storage });

app.post('/projects/submit', upload.single('image'), async (req, res) => {
  const { projectTitle, projectCategory, projectDescription } = req.body;
  const projectImage = req.file;

  // Use Multer to handle the image upload
  const uploadedImagePath = projectImage.path;

  // Read the binary data of the uploaded image
  const imageData = fs.readFileSync(uploadedImagePath);

  // Write the binary data to a new jpg file
  fs.writeFile(`./src/Images/${projectTitle}.jpg`, imageData, 'binary', (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
      return;
    }

    // Insert the project into the database with the path to the new jpg file
    const project = insertProject(projectTitle, projectCategory, projectDescription, `${projectTitle}.jpg`);
    res.json(project);
  });
});

app.post('/about/submit', upload.single('image'), async (req, res) => {
  
  const { imageTitle } = req.body;
  const aboutImage = req.file;

  // Use Multer to handle the image upload
  const aboutImagePath = aboutImage.path;

  // Read the binary data of the uploaded image
  const aboutImageData = fs.readFileSync(aboutImagePath);

  // Write the binary data to a new jpg file
  fs.writeFile(`./src/Images/${imageTitle}.jpg`, aboutImageData, 'binary', (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
      return;
    }
    
    const about = insertAboutImage(imageTitle, `${imageTitle}.jpg`);
    res.json(about);
  });
});

app.get('/projects', async (req, res) => {
  try {
    const projects = await getProjects();
    res.json(projects);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.get('/about', async (req, res) => {
  try {
    const about = await getAbout();
    res.json(about);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.delete('/projects/:id', async (req, res) => {
  try {
    const id = req.params.id;
    // Retrieve the project with the given id
    const project = await getProjectById(id);

    // Extract the project title from the project
    const { title } = project;

    // Delete the image file with the same title as the project
    fs.unlinkSync(`./src/Images/${title}.jpg`);
    fs.unlinkSync(`./src/Images/${title}`);

    await deleteProject(id);

    res.sendStatus(200);

  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.delete('/about/:id', async (req, res) => {
  try {

    const id = req.params.id;
    // Retrieve the project with the given id
    const about = await getAboutById(id);

    const { title } = about;

    // Delete the image file with the same title as the iamge title
    fs.unlinkSync(`./src/Images/${title}.jpg`);
    fs.unlinkSync(`./src/Images/${title}`);

    res.sendStatus(200);

  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});


const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server listening on port ${port}`));