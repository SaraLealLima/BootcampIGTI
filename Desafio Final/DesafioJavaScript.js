var readline = require("readline")
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var listaFuncionarios = [
    {
        nome: "John Baker",
        salario: 2500
    },
    {
        nome: "Mary Taylor",
        salario: 1500.50
    },
    {
        nome: "Walter Walter",
        salario: 6462.70
    },
    {
        nome: "Felipe Smith",
        salario: 3123.99
    },
    {
        nome: "Daiana Princess",
        salario: 8700
    },
    {
        nome: "Catarina Florist",
        salario: 1045
    },
    {
        nome: "Pedo Cure",
        salario: 4500
    }
]

function mostrarMenu() {
    console.log(`       --- Menu ---
    1 - Cadastrar funcionário
    2 - Imprimir contracheque
    3 - Sair`)
    rl.question("Digite opção 1, 2 ou 3: ", function (input) {
        if (input == 1) {
            cadastrarFuncionario()
        }
        else if (input == 2) {
            imprimirContracheque()
        }
        else if (input == 3) {
            console.log("Tchau, não volte por favor")
            rl.close()
        }
        else {
            console.log("Opção inválida, é só 1, 2 ou 3")
            mostrarMenu()
        }
    })
}

function cadastrarFuncionario() {
    var funcionario = {}
    rl.question("Digite o nome do funcionário: ", function (inputNome) {
        funcionario.nome = inputNome
        rl.question("Digite o salário do funcionário: ", function (inputSalario) {
            funcionario.salario = Number(inputSalario)
            listaFuncionarios.push(funcionario)
            mostrarMenu()
        })
    })

}

function imprimirContracheque() {
    console.log(listaFuncionarios)
    rl.question('Digite o índice do funcionário para imprimir o contracheque', function (inputIndice) {
        var funcionario = listaFuncionarios[inputIndice]
        var descontoINSS = calcularINSS(funcionario.salario)
        var salarioINSS = funcionario.salario - descontoINSS
        var descontoIRRF = calcularIRRF(salarioINSS)
        var totalDescontos = descontoINSS + descontoIRRF
        var salarioLiquido = funcionario.salario - totalDescontos
        console.log('Salário bruto:',funcionario.salario,
            'Desconto do INSS:',descontoINSS, 
            'Desconto do IRRF:',descontoIRRF, 
            'Salário liquido:',salarioLiquido)
    })
}

function calcularINSS(salario) {
    var totalDescontos = 0
    // console.log('salario', salario)
    // 1a aliquota
    if (salario <= 1045.00) {
        totalDescontos = ((salario * 7.5) / 100)
    } else if (salario > 1045.00) {
        totalDescontos += ((1045.00 * 7.5) / 100)
    }
    // 2a aliquota
    if (salario > 1045.01 && salario <= 2089.60) {
        totalDescontos += ((salario - 1045.01) * 0.09)
    } else if (salario > 2089.60) {
        totalDescontos += (2089.60 - 1045.01) * 0.09
    }
    // 3a aliquota
    if (salario > 2089.61 && salario <= 3134.40) {
        totalDescontos += ((salario - 2089.61) * 0.12)
    } else if (salario > 3134.40) {
        totalDescontos += (3134.40 - 2089.61) * 0.12
    }
    // 4a aliquota
    if (salario > 3134.41 && salario <= 6101.06) {
        totalDescontos += ((salario - 3134.41) * 0.14)
    } else if (salario > 6101.06) {
        totalDescontos = 713.10
    }
    return totalDescontos
}

function calcularIRRF(salarioINSS) {
    var totalDesconto2 = 0
    // 1 aliquota
    if (salarioINSS <= 1903.98) {
        totalDesconto2 = 0
        console.log('Não há descontos de IRRF')
    }
    // 2 aliquota
    if (salarioINSS >= 1903.99 && salarioINSS <= 2825.65) {
        totalDesconto2 = (salarioINSS * 7.5 / 100) - 142.80
    }
    // 3 aliquota
    if (salarioINSS >= 1826.66 && salarioINSS <= 3751.05) {
        totalDesconto2 = (salarioINSS * 15 / 100) - 354.80
    }
    // 4 aliquota
    if (salarioINSS >= 3751.05 && salarioINSS <= 4664.68) {
        totalDesconto2 = (salarioINSS * 22.5 / 100) - 636.13
    }
    // 5 aliquota
    if (salarioINSS >= 4664.69) {
        totalDesconto2 = (salarioINSS * 27.5 / 100) - 869.36
    }
    return totalDesconto2
}

mostrarMenu()

