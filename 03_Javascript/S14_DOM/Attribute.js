function fnShowHidePassword() {
  var inputDomElement = document.getElementById("input");
  var button = document.querySelector("button");

  if (inputDomElement.type === "password") {
    inputDomElement.type = "text";
    button.innerText = "Hide Password";
  } else {
    inputDomElement.type = "password";
    button.innerText = "Show Password";
  }
}
