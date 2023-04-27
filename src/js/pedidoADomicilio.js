const roundMoney = 100

// Event listener para funcion addToCart
var addToCartLinks = document.querySelectorAll(".add-to-cart");
addToCartLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault(); // previene que el link redirija a otra pagina
    var itemName = link.parentNode.dataset.itemName;
    var itemPrice = link.parentNode.dataset.itemPrice;
    selectQuantity(itemName, itemPrice);
  });
});

//Abre una ventana popup para seleccionar la cantidad del producto a añadir
function selectQuantity(itemName, itemPrice) {
  // Create a popup window
  var popup = window.open("", "popup", "width=300,height=200");

  // Add a quantity selector to the popup window
  var label = document.createElement("label");
  label.textContent = "Cantidad: ";
  var input = document.createElement("input");
  input.type = "number";
  input.min = "1";
  input.max = "10";
  input.value = "1";
  var button = document.createElement("button");
  button.textContent = "Añadir al carrito";
  button.addEventListener("click", function() {
    // When the button is clicked, add the selected quantity to the cart
    var quantity = input.value;
    addToCart(itemName, itemPrice, quantity);
    popup.close();
  });
  popup.document.body.appendChild(label);
  popup.document.body.appendChild(input);
  popup.document.body.appendChild(button);
}

// Añade un item al carrito
function addToCart(itemName, itemPrice, itemQuantity) {
    // Create new row for item in cart table
    var scanCart = document.getElementById("cart-items");
    var rows = scanCart.rows;

    console.log(rows.length);
    var cnt = 0;
    var encontrado = false;
    while (!encontrado && cnt < rows.length) {
      var cells = rows[cnt].cells
      console.log(cells[1].innerHTML);
      if (itemName == cells[1].innerHTML) {

        encontrado = true;
        cells[0].innerHTML = parseInt(cells[0].innerHTML) + parseInt(itemQuantity);
        cells[2].innerHTML = Math.round((parseFloat(cells[2].innerHTML) + itemPrice*itemQuantity) * 100)/100;
        
      } else {
        cnt = cnt + 1;
      }
      
    }

    if (!encontrado) {

      var newRow = document.createElement("tr");
      newRow.setAttribute('tabindex', '0');
      var quantityCell = document.createElement("td");
      quantityCell.innerHTML = itemQuantity;
      newRow.appendChild(quantityCell);
      var nameCell = document.createElement("td");
      nameCell.innerHTML = itemName;
      newRow.appendChild(nameCell);
      var priceCell = document.createElement("td");
      priceCell.innerHTML = Math.round(itemPrice*itemQuantity*100)/100;
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

    }

    updateTotal(Math.round(itemPrice*itemQuantity*100)/100);
  
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