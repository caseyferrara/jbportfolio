const multer = require('multer');
const express = require('express');
const request = require('request');
const cors = require('cors');
const fs = require('fs');

const app = express();

const { insertProject, updateProject, insertAboutImage, getProjects, getAbout, deleteProject, deleteAboutImage, getProjectById, getAboutById } = require('./src/Database/db');

app.use(cors());

app.use('/images', express.static('./src/Images'));

app.use(express.json());

app.get('/callback', (req, res) => {
  const code = req.query.code;
  console.log(code)
  const clientId = 'vAKqtbL2JR7mmz24hMlxf993JJQIiBg9';
  const clientSecret = 'YSt1mGdU2YXBMtV73g5O7xHpYIqE9bI7vfbD8eku3Dm_k0b6xPHMnhCxdmW7womM';
  const redirectUri = 'https://edd4-162-211-34-192.ngrok.io/callback';

  // Exchange the authorization code for an access token
  request.post({
    url: 'https://dev-apyiutdwrm7rajdb.us.auth0.com/oauth/token',
    form: {
      grant_type: 'authorization_code',
      client_id: clientId,
      client_secret: clientSecret,
      code: code,
      redirect_uri: redirectUri,
    },
    json: true
  }, (err, response, body) => {
    if (err) {
      res.status(500).send(err);
      return;
    }

    const accessToken = body.access_token;

    // Use the access token to retrieve the user's email address
    request.get({
      url: 'https://dev-apyiutdwrm7rajdb.us.auth0.com/userinfo',
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      json: true
    }, (err, response, body) => {
      if (err) {
        res.status(500).send(err);
        return;
      }

      const email = body.email;

      // Check if the email address is allowed
      if (isAllowedEmail(email)) {
        // Email is allowed, authenticate the user and redirect to the app
        res.redirect(`http://localhost:3000/admin`);
      } else {
        // Email is not allowed, show an error message
        res.send('Sorry, your email address is not allowed to access the app.');
      }
    });
  });
});

function isAllowedEmail(email) {
  const allowedEmails = ['casey.ferrara@outlook.com', 'jillian22brown@gmail.com'];
  return allowedEmails.includes(email);
}

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

app.post('/project/update/:id', async (req, res) => {
  const { id } = req.params;
  const oldProject = await getProjectById(id);
  const oldProjectTitle = oldProject.title;
  const { projectTitle, projectCategory, projectDescription } = req.body;

  fs.rename(`./src/Images/${oldProjectTitle}.jpg`, `./src/Images/${projectTitle}.jpg`, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
      return;
    }
  });

  fs.rename(`./src/Images/${oldProjectTitle}`, `./src/Images/${projectTitle}`, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
      return;
    }
  });

  try {
    const project = await updateProject(id, projectTitle, projectCategory, projectDescription);
    res.json(project);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
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

app.get('/project/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const projects = await getProjectById(id);
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

    await deleteAboutImage(id);

  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});


const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server listening on port ${port}`));