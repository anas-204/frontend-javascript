interface Teacher {
  readonly firstName : string
  readonly lastName : string
  fullTimeEmployee : boolean
  yearsOfExperience : number
  location : string
  [key : string] : any
}
interface directors extends Teacher{
  numberOfReports : number
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstInitial = firstName.length > 0 ? firstName[0].toUpperCase() : '';
  return `${firstInitial}. ${lastName}`;
}
