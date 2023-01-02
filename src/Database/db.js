const { Client } = require('pg');

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

const insertProject = async (id, projectTitle, projectCategory, projectDescription, projectImage) => {
  const text = 'INSERT INTO projects(id, title, category, description, image) VALUES($1, $2, $3, $4, $5) RETURNING *';
  const values = [id, projectTitle, projectCategory, projectDescription, projectImage];
  const res = await client.query(text, values);
  return res.rows[0];
};

module.exports = insertProject;