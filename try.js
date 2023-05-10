// let arr1 = [];
// for(var i=0;i<4;i++){
//     arr1[i] = i;
// }
// console.log()
// console.log("hey js");
// variable declaration

// let --- block scoped
// const  ---- constant
// var -- function scoped

// declare function in js

function doMyFirstFunction(name) {
  //   console.log(name);
}

// calling function
doMyFirstFunction("Ëyosi");

// var and let scopping

function varScopping() {
  var x = 1;
  console.log(x);
  if (true) {
    var x = 6;
    console.log(x);
  }
  console.log(x);
}

function letScopping() {
  let x = 1;
  console.log(x);
  if (true) {
    let x = 6;
    console.log(x);
  }
  console.log(x);
}

function blockScoppedLet() {
  let numArr = [];
  for (let i = 0; i < 5; i++) {
    numArr[i] = i * 2;
  }
  console.log(numArr[0]);
  console.log(numArr[1]);
  console.log(numArr[2]);
}
blockScoppedLet();

// object is JS
var Person = { name: "Äbebe", age: 24 };
console.log(Person.name);
console.log(Person.age);
// varScopping();
// letScopping();

// Hoisting

function hoisting() {
  a = 5;
  console.log(a);
  var a;
}
hoisting();
//const numbers = [1, 5, 18, 2, 77, 108]; print the odd numbers. You're not allowed to use for, while, do...while, for..of, forEach loop.
const numbers = [1, 5, 18, 2, 77, 108];

numbers.reduce(function (acc, num) {
  if (num % 2 !== 0) {
    console.log(num);
  }
}, 0);

//Create a function using function declaration named sum with one parameter of Array type, the returned result is the sum of all elements which are greater than 20.
//sum([10, 20, 50, 30, 8]);
function sum(arr) {
  let sum = 0;
  arr.forEach(function (num) {
    if (num > 20) {
      sum += num;
    }
  });
  return sum;
}

console.log(sum([10, 20, 50, 30, 8]));
//Create a function using function expression named getNewArray with one parameter of String Array, return a new array which contains all string, length is greater than and equal to 5, and contains letter ‘a’.
//getNewArray(["Hello", "Wonderful", "Happy", "People", "Have a great day"]);
const getNewArray = function (arr) {
  return arr.filter(function (str) {
    return str.length >= 5 && str.includes("a");
  });
};

console.log(
  getNewArray(["Hello", "Wonderful", "Happy", "People", "Have a great day"])
);
//output question
var a = 2;
let b = 3;
function outer() {
  let c = 5;
  var d = 7;
  return function inner() {
    b = 8;
    let c = 9;

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
  };
}
outer()();
//Q7: Write a JavaScript function that takes an object with a firstName and lastName property, and returns a new object with a fullName property
//that combines the two names. Use an arrow function to define the fullName property and the this keyword to refer to the firstName and lastName properties.
const createFullNameObject = (obj) => {
  return {
    firstName: obj.firstName,
    lastName: obj.lastName,
    fullName: () => `${obj.firstName} ${obj.lastName}`,
  };
};

const person = {
  firstName: "Eyosias",
  lastName: "Mitiku",
};

const fullNameObject = createFullNameObject(person);
console.log(fullNameObject.fullName());
//Write a JavaScript function that takes an object with a firstName and lastName property, and returns a new object with a fullName property that combines
//the two names. Use regular anonymous function to define the fullName property and the this keyword to refer to the firstName and lastName properties.
function createFullNameObj(obj) {
  return {
    firstName: obj.firstName,
    lastName: obj.lastName,
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
  };
}

const person2 = {
  firstName: "Mitiku",
  lastName: "Eyosias",
};

const fullNameObj = createFullNameObject(person2);
console.log(fullNameObj.fullName());
//Q8: Write a JavaScript function that takes an object with a firstName and lastName property, and a callback function that logs a message using the this keyword.
//Bind the callback function to the object using the bind method, and call the bound function with no arguments.
function logMessage(callback) {
  callback.bind(this)();
}

const person3 = {
  firstName: "Eyosias",
  lastName: "Mekonnen",
  log: function () {
    console.log("Hello, my name is " + this.firstName + " " + this.lastName);
  },
};

logMessage.call(person3, person3.log);
