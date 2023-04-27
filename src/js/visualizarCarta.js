// Get the button:
let mybutton = document.getElementById("myBtn");
let mybutton2 = document.getElementById("myBtn2")

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

async function leyendaFunction(){
  await swal.fire({
    title: "Leyenda",
    confirmButtonText: "Aceptar",
    html:`
    <p><img src="images/altramuz.png" width="70" height="70"/>Contiene altramuces</p>
        <p><img src="images/apio.png" width="70" height="70"/>Contiene apio</p>
        <p><img src="images/cacahuetes.png" width="70" height="70"/>Contiene cacahuetes</p><br>
        <p><img src="images/cereales.png" width="70" height="70"/>Contiene cereales</p>
        <p><img src="images/crustaceo.png" width="70" height="70"/>Contiene crustaceo</p>
        <p><img src="images/frutos-secos.png" width="70" height="70"/>Contiene frutos secos</p>
        <p><img src="images/huevos.png" width="70" height="70"/>Contiene huevo</p>
        <p><img src="images/lacteos.png" width="70" height="70"/>Contiene lacteos</p>
        <p><img src="images/moluscos.png" width="70" height="70"/>Contiene moluscos</p>
        <p><img src="images/mostaza.png" width="70" height="70"/>Contiene mostaza</p>
        <p><img src="images/pescado.png" width="70" height="70"/>Contiene pescado</p>
        <p><img src="images/sesamo.png" width="70" height="70"/>Contiene sesamo</p>
        <p><img src="images/soja.png" width="70" height="70"/>Contiene soja</p>
        <p><img src="images/sulfitos.png" width="70" height="70"/>Contiene sulfitos</p>
        <p><img src="images/vegano.jpg" width="70" height="70"/>El plato es vegano</p>
        `,

  })
}