const roundMoney = 100

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
    var quantityCell = document.createElement("td");
    quantityCell.innerHTML = 1;
    newRow.appendChild(quantityCell);
    var nameCell = document.createElement("td");
    nameCell.innerHTML = itemName;
    newRow.appendChild(nameCell);
    var priceCell = document.createElement("td");
    priceCell.innerHTML = itemPrice;
    newRow.appendChild(priceCell);
    var removeCell = document.createElement("td");
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";
    removeBtn.className = "btn btn-danger btn-sm";
    removeBtn.onclick = function() {
        removeItem(this);
    };
    removeCell.appendChild(removeBtn);
    newRow.appendChild(removeCell);
    document.getElementById("cart-items").appendChild(newRow);
    updateTotal(itemPrice);
}

function removeItem(button) {

    var row = button.parentNode.parentNode;
    
    // Get the price of the item to be removed
    var price = parseFloat(row.children[2].innerHTML);
    
    // Remove the row from the table
    row.parentNode.removeChild(row);
    
    // Update the total by subtracting the price of the removed item
    updateTotal(-price);
  
}

function updateTotal(itemPrice) {
   var currentPrice = parseFloat(document.getElementById("subtotal").textContent);
   var newPrice = currentPrice + parseFloat(itemPrice);

   var newP = document.createElement('p');
   newP.innerHTML = newPrice;

   document.getElementById("subtotal").innerHTML = Math.round(newPrice*100)/100;
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}