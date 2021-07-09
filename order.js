// Naming the function
function getPrice()
{
    // Declaring and getting all required variables
    var choice = parseFloat(document.getElementById('dropdown-menu').value);
    var quantity = document.getElementById('qty').value;
    // Setting a new variable for total price to 0
    var totalprice = "0.00";
    // Using innerHTML to write new output
    document.getElementById("tr").innerHTML = totalprice;
    document.getElementById("tr").value = quantity * choice;

}
