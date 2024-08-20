const http = require('http');
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
    let response = '';
    response += (`Number of students: ${fileLines.length - 1}`);
    for (const [field, names] of Object.entries(fieldsDetails)) {
      const list = names.join(', ');
      response += (`\nNumber of students in ${field}: ${names.length}. List: ${list}`);
    }

    resolve(response);
  });
});

const app = http.createServer((request, response) => {
  if (request.url === '/students') {
    const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';
    countStudents(DB_FILE).then((promiseRes) => {
      response.write('This is the list of our students\n');
      response.write(promiseRes);
      response.end();
    }).catch((error) => {
      response.write(error.message);
      response.end();
    });
  } else if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.write('Not Found');
    response.end();
  }
});

app.listen(1245);

module.exports = app;
