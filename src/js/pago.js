

async function pago() {
    await swal.fire({
        allowOutsideClick: false,
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
    });
}
