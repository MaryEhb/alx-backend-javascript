const fs = require('fs');

const readDatabase = (path) => new Promise((resolve, reject) => {
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
    resolve(fieldsDetails);
  });
});

module.exports = readDatabase;
