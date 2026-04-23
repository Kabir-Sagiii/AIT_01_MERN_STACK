var arr = [10, 20, 30, 40, 50];

var modifiedarray = arr.filter(function (element, index) {
  var result = element > 20;
  return result; // We can return only boolean value
  //[30,40,50]
});
