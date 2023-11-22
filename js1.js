
function sayHello() {
alert("Thank you for submitting.You are our first responsibility. Our staff will respond as soon as possible.")
}

function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}