// CREATING FUNCTION WITH ID "CALCULATE"

var priceBtn = document.getElementById('calculate'); // Here I go get my html id and attach it to a variable
priceBtn.addEventListener('click', function() { // Here use this variable and start a function around it (starting from user clicling on the button)

  // ---------------------------NAME OF BURGER--------------------------------------------------------------------------------------------

  var burgerName = document.getElementById('burger-name').value; // Inside the function I go get html id
  if (burgerName.lenght < 1) { // and say that IF the user types less than ONE word (lenght of the string) in the "name your burger" input type text

    alert ("please insert a name for your burger"); // then an alert pops up and tells the user to re-type
  } else {
    var finalPrice = 5; // otherwise a standard price will pop up

    // -------------------------ADDITION OF INGREDIENTS-----------------------------------------------------------------------------------

    var checkboxes = document.getElementsByClassName('ingredient'); // Here I create a a variable I am going to need in the for cycle
    for ( var i = 0; i < checkboxes.length; i++) { // Creating "for cycle" because I need to apply addition of price for EVERY element (cheese, tomatoe, eggs, ketchup and mustard). So I either do them individually or do it with a "for cycle"

      var checkbox = checkboxes[i]; // Of course I don't know which one the user is going to choose (if any), so I use the array principle [] and ask the machine to "check" which ones he/she selected
      var passChecked = checkbox.checked; // The ".checked"	specifies whether a checkbox should be checked or not (true or false).
      var price = parseInt(checkbox.dataset.price); // dataset goes into the html, finds the "data-price" (because I wrote ".price") and gets the number (which is the price) of the item attached to it.

      if (passChecked) { // If the user selects ANY of the items that have "data-price" attached to it, then we can apply an increment of price on top of the normal price.
        finalPrice = finalPrice + price;
      }
    }// END OF "FOR CYCLE"

    //------------------------------ Coupon section--------------------------------------------------------------------------------------

    var coupons = ["abc123", "def456", "ghi789", "jkl101", "mno112", "pqr131", "stu415", "vwx161", "yz7181"];

    var couponFound = false; // Boolean variable where the default value (for not putting anything or putting an incorrect coupon) is FALSE, so denies the cut-price to the user.
    var burgerCoupon = document.getElementById('burger-coupon').value; // Here I go find my id in the html and prepare a variable
    for (var i = 0; i < coupons.length; i++) { // Here I create a for cycle to make the computer go check what follows:

      var userCoupon = coupons[i]; // Makes the pc check inside the array if there is a match
      if (userCoupon == burgerCoupon) { // and if the one inserted by the user matches the one inside my array
        couponFound = true; // grants the coupon to the user
      }
    }// END OF "FOR CYCLE"

    //
    if (couponFound) {
      finalPrice = finalPrice / 100 * 20;
    }

    var printPrice = document.getElementById('price');
    printPrice.innerHTML = finalPrice;
  }

});
