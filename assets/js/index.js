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

// MyArray
/* function MyArray() {
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
  this.myPop = function name(start, amountOfElements) {
    let tempStorage = [amountOfElements];
    for (let i = 0; i < amountOfElements; i++) {
      tempStorage[i] = this[start];
      delete this[start];
      start++;
      this.length--;
    }
    return tempStorage;
  };

  // myForEach
  this.myForEach = function (func) {
    if (typeof func === "function") {
      let len = this.length;
      for (let i = 0; i < len; i++) {
        func.call(this[i], i, this, thisArr);
      }
    }
  };
}

// myFlatArray (need to repeat for myArray)
function customFlat(array, depth = 1) {
  if (depth < 0) {
    console.error("need positive value");
    return;
  }

  let flatArr = [];

  if (depth === 0) {
    flatArr = flatArr.concat(array);
    return array;
  }

  for (let i = 0; array.length; i++) {
    if (Array.isArray(array[i])) {
      //always arrays
      let buff = customFlat(array[i], depth - 1);
      flatArr = flatArr.concat(buff);
    } else {
      //always rest
      flatArr.push(array[i]);
    }
    return flatArr;
  }
} */

/*
//ex
this.forEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};*/

/* const myArrOne = new MyArray(1, 1, 2, 3, 4, 5);

console.log(myArrOne);

myArrOne.myForEach((elem, index) => console.log(elem));

myArrOne.myPush([444, 555, 666, 777]);
console.log(myArrOne);

myArrOne.myPop(3, 2);
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

// RECURSION
/* const pow = function (num, exp) {
  if (exp === 1) return num;
  return num * pow(num, exp - 1);
};

console.log(pow(2, 1)); */

/* // logPar
const logPar = function (num) {
  if (num === 0) return "no parenthesis";
  if (num === 1) return "()";
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.length++;
    arr[i] = "(";
  }
  for (let j = num; j < num; j++) {
    arr.length++;
    arr[j] = ")";
  }
  return arr;
  // logPar(num - 1);
};

// v2
function logPar2(num) {
  if (num === 0) {
    return "no parenthesis";
  } else if (num === 1) {
    return "()";
  } else {
    return `(${logPar2(num - 1)}))`;
  }
}
console.log(logPar(2));
console.log(logPar2(2)); */

/* // recursive range
function logRange(num1, num2) {
  if (num1 === undefined || num2 === undefined) {
    console.error("Enter a valid range");
  }
  if (num1 === num2) {
    console.log(num1);
  }
  if (num1 < num2) {
    console.log(logRange(num1 + 1, num2));
  }
  if (num1 > num2) {
    console.log(logRange(num1, num2 + 1));
  }
}

console.log(logRange(1, 5)); */

// counted data structures (symbol)

/* const symbolExample = Symbol("test");

const object = {
  test: "test",
  symbolExample: symbolExample,
  [symbolExample]: 325,
};

object[symbolExample] = "test";

console.log(object); */

/* // Spread operator   (with errors)
function log(...rest) {
  const array = ["test", "string", true, {}];
  console.log(rest);
  console.log(array);
  console.log(...array, ...rest); // spread operator
}

log(1, "test", 4, "st", 5);

function func(arr1, arr2) {
  return [...arr1, ...arr2];
}

const arr1 = ["1", "2", "3", "4", "5"];
const arr2 = ["11", "22", "33", "44", "55"];

console.log(func(arr1, arr2));

let obj1 = {
  test: "test",
};

function func2(arr, object) {
  return [...arr, obj];
}

console.log(func2(arr1, obj1));
 */

// Map & Set
// Set

//let set = new Set(["apple", "tree", "tree", "grass", "orangeTree"]);

const arr23 = ["apple", "tree", "tree", "grass", "orangeTree"];

function getU(arr) {
  const set = new Set(arr);

  return [...set];
}

const arr23 = ["apple", "tree", "tree", "grass", "orangeTree"];
console.log(getU(arr23));
