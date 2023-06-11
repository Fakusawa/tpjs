function convertir(montoPesos,tipoCambio) {
    let Estudiante = 40
    let trainee = 100
    let junior = 170
    let resultado = 0

    if (tipoCambio == "Estudiante"){
        resultado = montoPesos * Estudiante
    } else if (tipoCambio == "trainee"){
        resultado = montoPesos * trainee
    } else {
        resultado = montoPesos * junior
    }
    return resultado
}

let formulario = document.getElementById("form_conversor")

let moneda = document.getElementById("categoria")

let cantidad = document.getElementById("Cantidad")

let divResultado = document.getElementById("resultado")

formulario.addEventListener("reset", ()=>{
    divResultado.textContent = "Total a Pagar: $"
})

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();

    divResultado.textContent = "Total a Pagar: $" + convertir(cantidad.value,moneda.value)
})