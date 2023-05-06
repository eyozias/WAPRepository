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
