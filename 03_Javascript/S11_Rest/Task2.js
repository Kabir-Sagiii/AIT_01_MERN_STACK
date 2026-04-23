function f1() {
  //-----------

  return ["sagar", "kabir"];
}

// var name = f1();
// console.log(name[1]);

var [x, y] = f1();
console.log(x, y);
