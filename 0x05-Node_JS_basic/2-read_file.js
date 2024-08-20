const fs = require('fs');

const countStudents = (path) => {
  try {
    let fileLines = fs.readFileSync(path, 'utf-8').trim().split('\n');
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

    console.log(`Number of students: ${fileLines.length - 1}`);
    for (const [field, names] of Object.entries(fieldsDetails)) {
      const list = names.join(', ');
      console.log(`Number of students in ${field}: ${names.length}. List: ${list}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
