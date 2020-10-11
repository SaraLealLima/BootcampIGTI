
var operacao = process.argv[2]
var num1 = Number(process.argv[3])
var num2 = Number(process.argv[4])
var resultado = 0

process.argv[3] = Number(process.argv[3])
process.argv[4] = Number(process.argv[4])

console.log(process.argv)



if (operacao === "soma") {
    resultado = num1 + num2
} else if (operacao === "subtracao") {
    resultado = num1 - num2
} else if (operacao === "multiplicacao") {
    resultado = num1 * num2
} else if (operacao === "divisao") {
    resultado = num1 / num2
} else if (operacao === "resto") {
    resultado = num1 % num2
} else if (operacao === "porcentagem") {
    resultado = num1 * num2 / 100
}

 console.log(resultado)