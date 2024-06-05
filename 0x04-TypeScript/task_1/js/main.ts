interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [prop:string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const printTeacher = (firstName: string, lastName: string): string => {
  return `${firstName[0]}. ${lastName}`
}

interface printTeacherInterface {
  (firstName: string, lastName: string): string;
}

interface StudentClassConstructorInterface {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface{
  private _firstName: string;
  private _lastName: string;
  constructor(firstName: string, lastName: string){
    this._firstName = firstName;
    this._lastName = lastName;
  }
  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this._firstName;
  }
}