function outer() {
  var x = 10;
  return function inner() {
    console.log(x);
  };
}

const inner = outer();
inner();
