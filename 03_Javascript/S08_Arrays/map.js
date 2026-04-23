var arr = [10, 20, 30, 40, 50];

var newArray = arr.map(function (element, index) {
  var result = element * 10;
  return result; //<any type of value can be returned>
});

console.log(newArray);
