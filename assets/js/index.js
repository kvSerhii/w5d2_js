/* const box = {
  key: "value",
  test: "testValue",
  size: "large",
};

function Box(size, color, content) {
  this.content = content;
  this.size = size;
  this.color = color;

  this.open = function () {
    return `${this.content} opened`;
  };
}

function Crate(size, material, content) {
  this.content = content;
  this.size = size;
  this.material = material;
}

Crate.prototype = new Box(); //  Задаем прототип (Box) для Crate

const crate1 = new Crate("small", "wood", "testContent");

console.log(crate1);
console.log(crate1.open()); */

/* // inheritance & multi-level inheritance

function User(isMail, age, name) {
  this.isMail = function () {
    return !isMail;
  };
  this.age = age;
  this.name = name;
  this.sayHi = function () {
    return "Hi";
  };
}

function Employee(age, name, salary, isAtWork) {
  this.age = age;
  this.name = name;
  this.salary = salary;
  this.isAtWork = isAtWork;
  this.isWorking = function () {
    return !isAtWork;
  };
}

Employee.prototype = new User(); // Задаем прототип User для Employee

function Worker(age, name, salary) {
  this.age = age;
  this.name = name;
  this.salary = salary;
}

Worker.prototype = new Employee(); // Задаем прототип Employee для Worker

const employee1 = new Employee(25, "Bill", 3400, true);
const worker1 = new Worker(34, "Will", 2000);

console.log(employee1.sayHi()); // Вызываем метод наследуемый от User
console.log(worker1.sayHi()); // Вызываем метод наследуемый от User
console.log(worker1.isWorking()); // Вызываем метод наследуемый от Employee
 */

/* // data transfering by the value & by the reference
let testPrimitive1 = 5,
  testPrimitive2 = 10;
console.log(testPrimitive1, testPrimitive2);

testPrimitive2 = testPrimitive2;
console.log(testPrimitive1, testPrimitive2);

const testObj = {
  test1: "test1",
  test2: "test2",
};

console.log(testObj1);
console.log(testObj2);

testObj1 = testObj2;

console.log(testObj1);
console.log(testObj2); */

// Arrays
/* const arrTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
arrTest[5] = undefined;

console.log(arrOutput(arrTest));

function arrOutput(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === undefined) arr.splice(i, 1, 0);
    console.log(arr[i]);
  }
  return arr;
} */

/* // MyArray
function MyArray() {
  this.length = 0;

  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];

    this.length++;
  }

  // MyPush
  this.myPush = function (arguments) {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      this.length++;
    }
    return this;
  };

  // MyPop
  /*   this.myPop = function name(start, amountOfElements) {
    for(let i=0; i<amountOfElements;i++){
        delete(this[start]);
        start++;    }
        return this;
  }; 
}*/
/* 
const myArrOne = new MyArray(1, 1, 2, 3, 4, 5);

console.log(myArrOne);

myArrOne.myPush([543, 345, 456, 765]);

console.log(myArrOne); */
/* 
myArrOne.myPop(3);

console.log(myArrOne); */

/* // Switch

let input = prompt("Choice your desert: 1 - cake, 2 - cookie");
switch (input) {
  case "1": {
    console.log("You choice is Cake");
    break;
  }
  case "2": {
    console.log("You choice is Cookie");
    break;
  }
  default: {
    console.log("Unknown choice");
  }
} */

/* // ECMA6 new syntax example
let a = +prompt("Enter a number");
const sqearNum1 = (a) => a * a;
const sqearNum2 = (a) => a ** 2;
const sqearNum3 = (a) => Math.pow(a, 2);
squearNum(a); */

// Замыкания
