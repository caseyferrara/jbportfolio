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

const insertProject = async (projectTitle, projectCategory, projectDescription) => {
  // Insert the binary data into the "image" column of the "projects" table
  const text = "INSERT INTO projects(title, category, description) VALUES($1, $2, $3) RETURNING *";
  const values = [projectTitle, projectCategory, projectDescription];
  const res = await client.query(text, values);
  return res.rows[0];
};


const getProjects = async () => {
  const text = "SELECT title, category, description FROM projects";
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

module.exports = {
  insertProject,
  getProjects
}