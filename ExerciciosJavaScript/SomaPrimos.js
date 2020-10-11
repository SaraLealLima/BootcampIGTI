var primos = [ 2,  3,  5,  7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67]

var soma = primos.reduce(function(acumulador, valorAtual) {
    return acumulador + valorAtual;
} , 0)

console.log(soma)