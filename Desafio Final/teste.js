var salario = 8400
var totalDesconto = 0

// 1a aliquota
if (salario <= 1045.00) {
    totalDesconto = ((salario * 7.5) / 100)
    console.log(`O total descontado do INSS é de ${totalDesconto}`)
} else if (salario > 1045.00) {
    totalDesconto += ((1045.00 * 7.5) / 100)
}
// 2a aliquota
if (salario > 1045.01 && salario <= 2089.60) {
    totalDesconto += ((salario - 1045.01) * 0.09)
    console.log(`O total descontado do INSS é de ${totalDesconto}`)
} else if (salario > 2089.60) {
    totalDesconto += (2089.60 - 1045.01) * 0.09
}
// 3a aliquota
if (salario > 2089.61 && salario <= 3134.40) {
    totalDesconto += ((salario - 2089.61) * 0.12)
    console.log(`O total descontado do INSS é de ${totalDesconto}`)
} else if (salario > 3134.40) {
    totalDesconto += (3134.40 -2089.61) * 0.12
}
// 4a aliquota
if (salario > 3134.41 && salario <= 6101.06) {
    totalDesconto += ((salario -3134.41) * 0.14)
    console.log(`O total descontado do INSS é de ${totalDesconto}`)
} else if (salario > 6101.06) {
    totalDesconto = 713.10
    console.log(`O total descontado do INSS é de ${totalDesconto}`)
} 

var salarioINSS = salario - totalDesconto

// IRRF
// 1 aliquota
if (salarioINSS <= 1903.98) {
    console.log('Não há descontos de IRRF')
}
// 2 aliquota
if (salarioINSS >= 1903.99 && salarioINSS <= 2825.65) {
    totalDesconto2 = (salarioINSS * 7.5 / 100) - 142.80
    console.log(`O total descontado do IRRF é de ${totalDesconto2}`)
}
// 3 aliquota
if (salarioINSS >= 1826.66 && salarioINSS <= 3751.05) {
    totalDesconto2 = (salarioINSS * 15 / 100) - 354.80
    console.log(`O total descontado do IRRF é de ${totalDesconto2}`)
}
// 4 aliquota
if (salarioINSS >= 3751.05 && salarioINSS <= 4664.68) {
    totalDesconto2 = (salarioINSS * 22.5 / 100) - 636.13
    console.log(`O total descontado do IRRF é de ${totalDesconto2}`)
}
// 5 aliquota
if (salarioINSS >= 4664.69) {
    totalDesconto2 = (salarioINSS * 27.5/ 100) - 869.36
    console.log(`O total descontado do IRRF é de ${totalDesconto2}`)
}

salarioLiquido = salarioINSS - totalDesconto2

console.log(`Salário bruto: ${salario}`)
console.log(`Salário líquido: ${salarioLiquido}`)

console.log(`Salário bruto: ${funcionario.salario} Desconto do INSS: ${descontoINSS} Desconto do IRRF: ${descontoIRRF} Salário liquido: ${salarioLiquido}`)