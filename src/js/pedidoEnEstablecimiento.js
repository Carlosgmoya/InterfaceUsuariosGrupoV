async function codigo() {
    await swal.fire({
        allowOutsideClick: false,
        title:"Código de la mesa",
        showDenyButton: true,
        confirmButtonText:"Confirmar",
        html:`
        <form>
            <input class="swal2-input" placeholder="Código" id="codigo">
        <form>
        `,
    });
}

<<<<<<< HEAD
    switch (opcion_menuBasico) {
        case 0:
            registrarNuevo();
            break;
        case 1:
            login();
            break;
        default:
            break;
    }
}

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
        cells[0].innerHTML = parseInt(cells[0].innerHTML) + 1;
        
      } else {
        cnt = cnt + 1;
      }
      
    }

    if (!encontrado) {

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

    }

    updateTotal(itemPrice);
  
}

function removeItem(button) {

    var row = button.parentNode.parentNode;
    
    // Get the price of the item to be removed
    var price = parseFloat(row.children[2].innerHTML);
    var quantity = parseFloat(row.children[0].innerHTML);
    
    // Remove the row from the table
    row.parentNode.removeChild(row);
    
    // Update the total by subtracting the price of the removed item
    updateTotal(-(price*quantity));
  
}

function updateTotal(itemPrice) {
   var currentPrice = parseFloat(document.getElementById("subtotal").textContent);
   var newPrice = currentPrice + parseFloat(itemPrice);

   var newP = document.createElement('p');
   newP.innerHTML = newPrice;

   document.getElementById("subtotal").innerHTML = Math.round(newPrice*100)/100;
}

=======
>>>>>>> f6e10f2ce6232fcb067f196adca830bab8920ed0
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
<<<<<<< HEAD
}

=======
}
>>>>>>> f6e10f2ce6232fcb067f196adca830bab8920ed0
