interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const s1: Student = {
  firstName: 'Mariem',
  lastName: 'Ehab',
  age: 23,
  location: 'Cairo',
};

const s2: Student = {
  firstName: 'Mary',
  lastName: 'Maher',
  age: 23,
  location: 'Cairo',
};

const studentsList: Student[] = [s1, s2];

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

const headerRow = document.createElement('tr');
const headerCell1 = document.createElement('th');
const headerCell2 = document.createElement('th');

headerCell1.textContent = 'First Name';
headerCell2.textContent = 'Location';

headerRow.appendChild(headerCell1);
headerRow.appendChild(headerCell2);

thead.appendChild(headerRow);
table.appendChild(thead);

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const firstCell = document.createElement('td');
  const secondCell = document.createElement('td');

  firstCell.textContent = student.firstName;
  secondCell.textContent = student.location;

  row.appendChild(firstCell);
  row.appendChild(secondCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);