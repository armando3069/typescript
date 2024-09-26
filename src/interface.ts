interface IStudentDetails {
  id?: number;
  firstName: string;
  secondName: string;
  age: number;
  graduate: "yes" | "no";
}

interface IStudentProfession {
  prefession: string;
}

interface IStudent extends IStudentDetails, IStudentProfession {}

const student: IStudent = {
  id: 0,
  firstName: "Buza",
  secondName: "Dan",
  age: 19,
  graduate: "no",
  prefession: "Programmer",
};

const studentLog = (student: IStudent) => {
  console.log(
    `Student: ${student.firstName} ${student.secondName}\nAge: ${student.age}\nGraduate: ${student.graduate}\nProfession: ${student.prefession}`
  );
};

studentLog(student);
