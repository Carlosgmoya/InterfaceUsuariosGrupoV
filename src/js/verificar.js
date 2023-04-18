
let mensaje = document.getElementById("mensaje")

let boton = document.getElementById("help")

function mostrar(){
    if(mensaje.style.display == "none"){
        mensaje.style.display = "block";
    }else{
        mensaje.style.display = "none";
    }
}