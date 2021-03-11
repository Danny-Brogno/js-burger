// CREATING FUNCTION WITH ID "CALCULATE"

var priceBtn = document.getElementById('calculate'); // Here I go get my html id and attach it to a variable
priceBtn.addEventListener('click', function(){ // Here use this variable and start a function around it (starting from user clicling on the button)

  var burgerName = document.getElementById('burger-name').value; // Inside the function I go get html id
  if (burgerName.lenght < 1) { // and say that IF the user types less than ONE word (lenght of the string) in the "name your burger" input type text

    alert("please insert a name for your burger"); // then an alert pops up and tells the user to re-type
  } else {
    var finalPrice = 5; // otherwise a standard price will pop up

  }

});
