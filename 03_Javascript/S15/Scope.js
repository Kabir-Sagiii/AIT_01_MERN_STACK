function f1() {
  pin = 123; // is it valid or not
  var x = 10;
  let y = 20;

  if (true) {
    var username = "raj";
    let gender = "male";
    console.log(x, y, gender, pin);
  }

  console.log(username);
  console.log(pin);
  //   console.log(gender); //error
}

f1(); //

console.log(pin);

function f2() {
  console.log("f2", pin);
}
f2();
