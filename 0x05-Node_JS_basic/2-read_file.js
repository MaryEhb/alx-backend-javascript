const countStudents = (path) => {
  const fs = require('fs');

  try {
    const file_content = fs.readFileSync(path, 'utf-8');
    const file_lines = file_content.trim().split('\n');

    const fields_details = {};
    for (let i = 1; i < file_lines.length; i++) {
      const values = file_lines[i].split(',');
      const field = values[values.length - 1];
      const name = values[0];

      if (field in fields_details) {
        fields_details[field].push(name);
      } else {
        fields_details[field] = [name];
      }
    }

    console.log(`Number of students: ${file_lines.length - 1}`);
    for (const [field, names] of Object.entries(fields_details)) {
      const list = names.join(', ');
      console.log(`students in ${field}: ${names.length}. List: ${list}`);
    }

  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
