const readDatabase = require('../utils');

const StudentsController = class {
  static getAllStudents(req, res) {
    const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(DB_FILE).then((fieldsDetails) => {
      const sortedFields = Object.keys(fieldsDetails)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      const response = [];
      response.push('This is the list of our students');
      sortedFields.forEach((field) => {
        const list = fieldsDetails[field].join(', ');
        response.push(`Number of students in ${field}: ${fieldsDetails[field].length}. List: ${list}`);
      });

      res.status(200).send(response.join('\n'));
    }).catch(() => {
      res.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(DB_FILE)
      .then((fieldsDetails) => {
        if (!fieldsDetails[major]) {
          res.status(500).send('Major parameter must be CS or SWE');
          return;
        }

        const list = fieldsDetails[major].join(', ');
        res.status(200).send(`List: ${list}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
};

export default StudentsController;
module.exports = StudentsController;
