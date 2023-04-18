
async function menuBasico() {
    opcion_menuBasico = -1

    await swal.fire({
        title: "Inicie sesión",
        showConfirmButton:false,
        html:`
            <button class="swal2-confirm swal2-styled" onclick='opcion_menuBasico=0;Swal.close()'>
                Crear nueva cuenta
            </button>
            <br>
            <button class="swal2-confirm swal2-styled" onclick='opcion_menuBasico=1;Swal.close()'>
                Iniciar sesión
            </button>
        `,
    });

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