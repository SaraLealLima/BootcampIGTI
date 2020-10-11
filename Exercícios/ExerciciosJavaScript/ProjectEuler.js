var multiplos = []
for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0) {
        multiplos.push(i)
    }
    else if (i % 5 === 0) {
        multiplos.push(i)
    }
}
console.log(multiplos)

var soma = multiplos.reduce(function(acumulador, valorAtual) {
    return acumulador + valorAtual;
}, 0)
// o reduce espera que você passe duas coisas: uma função e o valor inicial (acumulador)
// essa função recebe este valor inicial (acumulador) e o primeiro item da array
// ela precisa retornar o novo valor inicial para que seja executada com o segundo item da array

console.log(soma)
