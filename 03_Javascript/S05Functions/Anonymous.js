var print = function (x) {
  //instructions
  console.log("I am Anonymous");
  return x;
};

var data = print(999);
console.log(data);

function getUser(getId) {
  getId();
}

getUser(function () {
  console.log("user id");
});
