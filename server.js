const multer = require('multer');
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

const { insertProject, getProjects } = require('./src/Database/db');

app.use(cors());

app.use('/images', express.static('./src/Images'));


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './src/Images');
  },
  filename: function(req, file, cb) {
    cb(null, `${req.body.projectTitle}`);
  }
});

const upload = multer({ storage: storage });


app.get('/projects', async (req, res) => {
  try {
    const projects = await getProjects();
    res.json(projects);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.post('/projects/submit', upload.single('image'), async (req, res) => {
  const { projectTitle, projectCategory, projectDescription } = req.body;
  const image = req.file;

  // Use Multer to handle the image upload
  const uploadedImagePath = image.path;

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

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server listening on port ${port}`));