function calcularDolar(){
    let dolar = parseFloat(prompt("Ingrese el valor en dolares que quiere convertir a pesos"))
    let tipo = prompt("Elija el valor a tener en cuenta : Oficial / Blue")
    if (tipo=="Oficial"){
        alert("Esos dolares equivalen a " + dolar*368.19 + " pesos")
    } else if (tipo=="Blue"){
        alert("Esos dolares equivalen a " + dolar*985 + " pesos")
    } else{
        alert("Opcion invalida")
    }

}

let cambiar = true
do {
    calcularDolar()
    let otraConsulta = prompt("¿Quiere hacer otra consulta?")
    if (otraConsulta == "No") {
        cambiar = false
    }

} while (cambiar == true)
