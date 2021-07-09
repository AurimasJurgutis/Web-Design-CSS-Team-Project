/* News and Events Page Javascript */

// Beer Garden Modal
// Getting elements and on-click function to display modal
var gModal = document.getElementById("gardenModal");
var gImg = document.getElementById("gardenImg");

gImg.onclick = function(){
  gModal.style.display = "block";
}

// X button to close the modal.
var span = document.getElementsByClassName("gClose")[0];

span.onclick = function() { 
  gModal.style.display = "none";
}

// Culture Day Modal 
// Getting elements and on-click function to display modal
var cModal = document.getElementById("cultureModal");
var cImg = document.getElementById("culture");

cImg.onclick = function(){
	cModal.style.display = "block";
}

// X button to close the modal.
var cSpan = document.getElementsByClassName("cClose")[0];

cSpan.onclick = function(){
	cModal.style.display = "none";
}