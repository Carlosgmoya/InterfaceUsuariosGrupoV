
let btn = document.getElementById("help")

btn.addEventListener("click", async () => {
    await mensaje();
});

async function mensaje(){
    await swal.fire({
        title: "Sobre el codigo",
        confirmButtonText:"Entendido",
        html:`
            <p>Consulta el código de la mesa o consulta al camarero<p/>

        `,
    });
}