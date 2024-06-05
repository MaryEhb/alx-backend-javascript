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

console.log(studentsList);
