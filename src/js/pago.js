let carrito = document.getElementById("cart-items");

baseDeDatos = JSON.parse(localStorage.getItem("sistema-de-login"));

let btnLogin = document.getElementById("login");
let btnLogout = document.getElementById("logout");
let username = document.getElementById("username");

if(localStorage.getItem("isLoggedIn")){
    username.innerHTML = "Bienvenidos, " + localStorage.getItem("usuario");
    username.style.display = "block";
    
    btnLogin.style.display = "none";
    btnLogout.style.display = "block";
}

if(!baseDeDatos) {
    cargarDatosIniciales()
}

function guardarDatosNuevos() {
    localStorage.setItem("sistema-de-login", JSON.stringify(baseDeDatos))
}

function cargarDatosIniciales(){
    baseDeDatos ={
        admin:{
            contraseña: "123"
        },
    
        usuario:{
            contraseña: "123"
        }
    };
}

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

async function registrarNuevo() {
    opcion_registrar = -1;
    await swal.fire({
        title:"Registrar",
        showConfirmButton:false,
        html:`
            <input class="swal2-input" placeholder="Usuario" id="usuario">
            <input type="password" class="swal2-input" placeholder="Contraseña" id="contraseña">
            <button class="swal2-confirm swal2-styled" onclick='opcion_registrar=0;Swal.clickConfirm()'>
                Confirmar
            </button>
            <button class="swal2-confirm swal2-styled" onclick='opcion_registrar=1;Swal.close()'>
                Cancelar
            </button>
            `,
        preConfirm: () => {
            let usuario = document.getElementById("usuario").value;
            let contraseña = document.getElementById("contraseña").value;
            if(!usuario){
                Swal.showValidationMessage("No hay usuario")
                return false;
            }
            if(!contraseña){
                Swal.showValidationMessage("No hay contraseña")
                return false;
            }
            baseDeDatos[usuario] = {}
            baseDeDatos[usuario].contraseña = contraseña;
            guardarDatosNuevos();
            return true;
        }
    });
    switch (opcion_registrar) {
        case 0:
            exito();
            break;
        case 1:
            menuBasico();
        default:
            break;
    }
}

async function exito(){
    await swal.fire({
        confirmButtonText:"Entendido",
        html:`
            <h1>Cuenta creado!<h1>
            <h2>Ya puedes iniciar sesion!<h2>
        `,
    });

    menuBasico();
}

async function login() {
    let {value : datos} = await swal.fire({
        title:"Iniciar sesion",
        confirmButtonText:"Login",
        denyButtonText:"Cancelar",
        html:`
        <div style="margin:5px">
            <input class="swal2-input" placeholder="Usuario" id="usuario">
            <input type="password" class="swal2-input" placeholder="Contraseña" id="contraseña">
        </div>
        `,
        preConfirm:()=>{
            let usuario = document.getElementById("usuario").value;
            let contraseña = document.getElementById("contraseña").value;
            if(!usuario){
                Swal.showValidationMessage("No hay usuario")
                return false;
            }
            if(!contraseña){
                Swal.showValidationMessage("No hay contraseña")
                return false;
            }
            let datos = baseDeDatos[usuario]
            if(!datos) {
                Swal.showValidationMessage("El usuario no existe")
                return false;
            }
            if (datos.contraseña != contraseña) {
                Swal.showValidationMessage("La contraseña es incorrecta")
                return false;
            }
            return datos
        },
    }).then((result) => {
        if (result.isDenied) {
    
        } else {
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("usuario", document.getElementById("usuario").value)
        
            username.innerHTML = "Bienvenidos, " + localStorage.getItem("usuario");
        
            username.style.display = "block";
            btnLogin.style.display = "none";
            btnLogout.style.display = "block";
            return datos;
        }
    });
}

btnLogout.addEventListener("click", function(){
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("usuario");

    username.style.display = "none";
    btnLogin.style.display = "block";
    btnLogout.style.display = "none";
    cerrarSesion();
});

async function cerrarSesion(){
    await swal.fire({
        confirmButtonText:"Entendido",
        html:`
            <h1>Sesion cerrado<h1>
        `,
    });
}

btnLogin.addEventListener("click", async () => {
    await menuBasico();
});

async function comprobar(){
    if(localStorage.getItem("isLoggedIn")){
        if(carrito.rows.length == 0){
            error();
        }else{
            pago();
        }
    }else{
        menuBasico();
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
    })
}


async function pago() {
    await swal.fire({
        allowOutsideClick: true,
        title:"Detalles del usuario",
        showDenyButton: true,
        denyButtonColor: '#d33',
        denyButtonText: 'Volver',
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
    }).then((result) => {
        if (result.isDenied) {
            swal.fire({
                title: 'Pedido cancelado',
            });
        } else {
            var subtotal = document.getElementById("subtotal");
            var precio = subtotal.innerHTML;
            subtotal.innerHTML = 0;
            carrito.innerHTML = null;
            realizado(precio);
        }
    });
}

function isNumeric(input){
    var pattern = /^\d{9}$/;
    return pattern.test(input);
}
