/* Reviews Page Javascript */

// Gordan Ramsay Modal
// Getting elements and on-click function to display modal
var grModal = document.getElementById("gordonModal");
var grImg = document.getElementById("gordonImg");

grImg.onclick = function(){
  grModal.style.display = "block";
}

// X button to close the modal.
var span = document.getElementsByClassName("grClose")[0];

span.onclick = function() { 
  grModal.style.display = "none";
}

// Guy Fieri Modal 
// Getting elements and on-click function to display modal
var fModal = document.getElementById("fieriModal");
var fImg = document.getElementById("guyImg");

fImg.onclick = function(){
	fModal.style.display = "block";
}

// X button to close the modal.
var fSpan = document.getElementsByClassName("fClose")[0];

fSpan.onclick = function(){
	fModal.style.display = "none";
}