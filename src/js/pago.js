let carrito = document.getElementById("cart-items");

async function comprobar(){
    if(carrito.rows.length == 0){
        error();
    }else{
        pago();
    }
}

async function error() {
    await swal.fire({
        title:"Carrito vacío !",
    });
}

async function realizado(precio){
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;
    await swal.fire({
        allowOutsideClick: true,
        title:"Detalles del pedido",
        confirmButtonText:"Entendido",
        html:`
        <div>
            <p>Nombre:${nombre}<p/>
            <p>Telefono:${telefono}<p/>
            <p>Direccion:${direccion}<p/>
            <p>Precio:${precio}<p/>
        <div/>
        `,
    });
}

async function pago() {
    await swal.fire({
        allowOutsideClick: true,
        title:"Detalles del usuario",
        showDenyButton: true,
        denyButtonText: 'Cancelar',
        confirmButtonText:"Pedir",
        html:`
        <form>
            <input class="swal2-input" placeholder="Nombre" id="nombre">
            <input class="swal2-input" placeholder="Teléfono" id="telefono">
            <input class="swal2-input" placeholder="Dirección" id="direccion">
            <br/>
            <p>Selecciona método de pago</p>
            <input type="radio" id="efectivo" name="pago" value="Efectivo">
            <label for="efectivo">Efectivo</label><br>
            <input type="radio" id="tarjeta" name="pago" value="Tarjeta">
            <label for="tarjeta">Tarjeta</label><br>
        <form>
        `,
        preConfirm: () =>{
            let nombre = document.getElementById("nombre").value;
            let telefono = document.getElementById("telefono").value;
            let direccion = document.getElementById("direccion").value;
            let efectivo = document.getElementById("efectivo");
            let tarjeta = document.getElementById("tarjeta");
            if(!nombre){
                Swal.showValidationMessage("Nombre vacío")
                return false;
            }
            if(!isNumeric(telefono)){
                Swal.showValidationMessage("Telefono incorrecto")
                return false;
            }
            if(!direccion){
                Swal.showValidationMessage("Direccion vacío")
                return false;
            }
            if(!(efectivo.checked || tarjeta.checked)){
                Swal.showValidationMessage("No has elegido método de pago")
                return false;
            }

        }
    });
    var carritoSize = parseInt(carrito.rows.length);

    for(let i=0; i<carritoSize; i++) {
        carrito.deleteRow(0);
    }

    var subtotal = document.getElementById("subtotal");

    var precio = subtotal.innerHTML;

    subtotal.innerHTML = 0;

    realizado(precio);
}

function isNumeric(input){
    var pattern = /^\d{9}$/;
    return pattern.test(input);
}
