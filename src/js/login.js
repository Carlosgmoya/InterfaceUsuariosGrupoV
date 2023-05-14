
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
