const { Client } = require('pg');
const fs = require('fs');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'jbportfolio',
  password: '',
  port: 5432,
});

client.connect((err) => {
    if (err) {
      console.error('Error connecting to the database', err.stack);
    } else {
      console.log('Connected to the database');
    }
});

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

module.exports = {
  insertProject,
  insertAboutImage,
  getProjects,
  getAbout,
  deleteProject,
  getProjectById
}