/* Javascript for the Card Payment Page */

// Function to validate card name input.
function validation(){
	var cardName = document.forms["cardPayment"]["cardName"].value;
	var cardNumber = document.forms["cardPayment"]["cardNumber"].value;
	var cvv = document.getElementById("cvvNumber").value;
	
	// Card name validation // 
	if (cardName == ""){
		alert("Card name must be filled");
		return false;
	}
	// Card number validation //
	if (isNaN(cardNumber)){
		alert("Please enter a valid card number");
		return false;
	}
	// Card cvv validation // 
	if (isNaN(cvv) || cvv.length != 3){
		alert("CVV Must be 3 numbers");
		return false;
	} 
	// Card validation true //
	else{
		alert("Thank you! Your order has been recieved. Now returning you to main page.");
		return true;
	}
	
}
	