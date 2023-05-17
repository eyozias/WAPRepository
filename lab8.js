//Question 1

const student = {
  firstName: "Eyosias",
  lastName: "Mekonnen",
  grades: [],
  inputNewGrade: function (newGrade) {
    this.grades.push(newGrade);
  },
  computeAverageGrade: function () {
    let total = 0;
    for (let i in this.grades) {
      total += this.grades[i];
    }
    return total / this.grades.length;
  },
};

const studentsArray = [
  Object.create(student),
  Object.create(student),
  Object.create(student),
];

studentsArray[0].inputNewGrade(99);
studentsArray[1].inputNewGrade(96);
studentsArray[2].inputNewGrade(94);

//Question 2

class students {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];
    this.inputNewGrade = function (newGrade) {
      this.grades.push(newGrade);
    };
    this.computeAverageGrade = function () {
      let total = 0;
      for (let i in this.grades) {
        total += this.grades[i];
      }
      return total / this.grades.length;
    };
  }
}

const student1 = new students("Eyosias", "Mekonnen");
const student2 = new students("Samrawit", "Zerihun");
const student3 = new students("Ray", "Mendez");

student1.inputNewGrade(80);
student2.inputNewGrade(85);
student3.inputNewGrade(95);

const studentsArray2 = [student1, student2, student3];

//Question 3

Array.prototype.sort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] > this[j]) {
        const temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }
    }
  }
};
//implement employee and manager classes using class syntax
// class Employee {
//   #fullname;
//   static #counter = 0;
//   constructor(fullname, salary, hiredate) {
//     this.#fullname = fullname;
//     this.salary = salary;
//     this.hiredate = hiredate;
//     Employee.incCounter;
//   }

//   getfullname() {
//     return this.#fullname;
//   }
//   setfullname(n) {
//     this.#fullname = n;
//   }

//   getsalary() {
//     return this.salary;
//   }

//   gethiredate() {
//     return this.hiredate;
//   }

//   calcSalary() {
//     return "salary";
//   }
//   static incCounter() {
//     // employee #counter = 1;
//   }
// }

// class Manager extends Employee {
//   constructor(fullname, salary, hiredate, bonus) {
//     super(fullname, salary, hiredate);
//     this.bonus = bonus;
//   }

//   calcSalary() {
//     return this.salary * this.bonus + this.salary;
//   }
// }
// let emp = new Employee("John Doe", 2000, new Date(2020, 3, 17));
// console.log(employee.getName());

// let mgr = new Manager("smith Smith", 1500, new Date(2020, 5, 15), 0.05);
// console.log(mgr.calcSalary());
// console.log(Manager.getCounter());
