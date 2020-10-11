function multiplicacao (p1, p2) {
    console.log('function multiplicacao executada')
    //var resultado = p1 * p2
    // return resultado
     return p1 * p2 
}

var resultado = multiplicacao(4, 3);
console.log(resultado)
console.log(multiplicacao(10, 2))

function saudacao(nome) {
    console.log(`Olá ${nome} seja bem vindo`)
}

console.log(saudacao("Sara"))

function funcaoSemParametro() {
    var a = 1
    var b = 2
    console.log(a+b)
}

funcaoSemParametro()       // a função pode ser chamada antes ou depois de ser escrita, por exemplo, essa linha eu poderia colocar no topo do codigo sem problemas

/*
no caso essas variáveis a e b apenas existem dentro da função, se vc tentar
dar um console.log nelas fora da função, dará erro, onde mostrará que elas nao foram definidas
*/