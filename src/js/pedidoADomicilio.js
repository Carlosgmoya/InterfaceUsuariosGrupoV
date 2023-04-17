// Event listener para funcion addToCart
var addToCartLinks = document.querySelectorAll(".add-to-cart");
addToCartLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault(); // previene que el link redirija a otra pagina
    var itemName = link.parentNode.dataset.itemName;
    var itemPrice = link.parentNode.dataset.itemPrice;
    addToCart(itemName, itemPrice);
  });
});

// Añade un item al carrito
function addToCart(itemName, itemPrice) {
    // Create new row for item in cart table
    var newRow = document.createElement("tr");
    var nameCell = document.createElement("td");
    nameCell.innerHTML = itemName;
    newRow.appendChild(nameCell);
    var priceCell = document.createElement("td");
    priceCell.innerHTML = itemPrice;
    newRow.appendChild(priceCell);
    var quantityCell = document.createElement("td");
    quantityCell.innerHTML = 1;
    newRow.appendChild(quantityCell);
    var removeCell = document.createElement("td");
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";
    removeBtn.className = "btn btn-danger btn-sm";
    removeBtn.onclick = function() {
        //removeItem(this);
    };
    removeCell.appendChild(removeBtn);
    newRow.appendChild(removeCell);
    document.getElementById("cart-items").appendChild(newRow);
    //updateTotal(itemPrice);
}

function removeItem(item) {

}

function updateTotal(itemPrice) {
    
}