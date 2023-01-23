const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  user: 'zpjiebiobxywzf',
  host: 'ec2-52-201-124-168.compute-1.amazonaws.com',
  database: 'dan42g8je74u0r',
  password: process.env.DB_PASS,
  port: 5432,
});

client.connect((err) => {
    if (err) {
      console.error('Error connecting to the database', err.stack);
    } else {
      console.log('Connected to the database');
    }
});

const getUsers = async () => {
  const text = "SELECT * FROM users";
  return new Promise((resolve, reject) => {
    client.query(text, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res.rows);
      }
    });
  });
};

const getProjects = async () => {
  const text = "SELECT id, title, category, description FROM projects";
  return new Promise((resolve, reject) => {
    client.query(text, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res.rows);
      }
    });
  });
};

const getAbout = async () => {
  const text = "SELECT id, title FROM about";
  return new Promise((resolve, reject) => {
    client.query(text, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res.rows);
      }
    });
  });
};

const insertProject = async (projectTitle, projectCategory, projectDescription) => {
  const text = "INSERT INTO projects(title, category, description) VALUES($1, $2, $3) RETURNING *";
  const values = [projectTitle, projectCategory, projectDescription];
  const res = await client.query(text, values);
  return res.rows[0];
};

const updateProject = async (id, projectTitle, projectCategory, projectDescription) => {
  const text = "UPDATE projects SET title = $1, category = $2, description = $3 WHERE id = $4 RETURNING *";
  const values = [projectTitle, projectCategory, projectDescription, id];
  const res = await client.query(text, values);
  return res.rows[0];
};

const insertAboutImage = async (imageTitle) => {
  const text = "INSERT INTO about(title) VALUES($1) RETURNING *";
  const values = [imageTitle];
  const res = await client.query(text, values);
  return res.rows[0];
};

const deleteProject = async (id) => {
  const text = "DELETE FROM projects WHERE id = $1 RETURNING *";
  const values = [id];
  return new Promise((resolve, reject) => {
    client.query(text, values, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res.rowCount);
      }
    });
  });
};

const deleteAboutImage = async (id) => {
  const text = "DELETE FROM about WHERE id = $1 RETURNING *";
  const values = [id];
  return new Promise((resolve, reject) => {
    client.query(text, values, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res.rowCount);
      }
    });
  });
};

const getProjectById = async (id) => {
  const text = "SELECT id, title, category, description FROM projects WHERE id = $1";
  const values = [id];
  return new Promise((resolve, reject) => {
    client.query(text, values, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res.rows[0]);
      }
    });
  });
};

const getAboutById = async (id) => {
  const text = "SELECT id, title FROM about WHERE id = $1";
  const values = [id];
  return new Promise((resolve, reject) => {
    client.query(text, values, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res.rows[0]);
      }
    });
  });
};


module.exports = {
  insertProject,
  updateProject,
  insertAboutImage,
  getUsers,
  getProjects,
  getAbout,
  deleteProject,
  deleteAboutImage,
  getProjectById,
  getAboutById
}