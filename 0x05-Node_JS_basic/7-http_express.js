const express = require('express');
const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    let fileLines = data.trim().split('\n');
    fileLines = fileLines.filter((line) => line.trim() !== '');

    const fieldsDetails = {};
    for (let i = 1; i < fileLines.length; i += 1) {
      const values = fileLines[i].split(',');
      const field = values[values.length - 1].trim();
      const name = values[0].trim();

      if (field in fieldsDetails) {
        fieldsDetails[field].push(name);
      } else {
        fieldsDetails[field] = [name];
      }
    }
    const response = [];
    response.push(`Number of students: ${fileLines.length - 1}`);
    for (const [field, names] of Object.entries(fieldsDetails)) {
      const list = names.join(', ');
      response.push(`Number of students in ${field}: ${names.length}. List: ${list}`);
    }

    resolve(response);
  });
});

const app = express();

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';
  res.type('text/plain');
  countStudents(DB_FILE).then((promiseRes) => {
    res.send(`This is the list of our students\n${promiseRes.join('\n')}`);
  }).catch((error) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send(`This is the list of our students\n${error.message}`);
  });
});

app.listen(1245);

module.exports = app;
