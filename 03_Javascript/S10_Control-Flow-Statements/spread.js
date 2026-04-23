var arr1 = [10, 20, 30, 40];

var arr2 = [true, ...arr1, "hello"];

var obj1 = {
  name: "S1",
  gender: "male",
};

var obj2 = {
  ...obj1,
  id: 101,
};

console.log(obj1);
console.log();
console.log(obj2);
