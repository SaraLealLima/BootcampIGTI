function calcularIMC() {
    var altura = Number(document.getElementById("altura").value)
    var peso = Number(document.getElementById("peso").value)
    var imc = peso / (altura * altura)
    console.log(imc)
    var imcResultado = ""

    if (imc < 18.5) {
        imcResultado = "que seu peso está abaixo do normal"
    } else if ((imc >= 18.5) && (imc < 25)) {
        imcResultado = "que seu peso está normal"
    } else if ((imc >= 25) && (imc < 30)) {
        imcResultado = "sobrepeso"
    } else if ((imc >= 30) && (imc < 40)) {
        imcResultado = "obesidade"
    } else {
        imcResultado = "obesidade grave"
    }

    
    document.getElementById("resultado").innerHTML = `Seu IMC é: ${imc}`
    document.getElementById("descricaoResultado").innerHTML = `Isso indica  ${imcResultado}`
}