var animais = ["gato", "cachorro", "pato", "mula", "capivara"]
var i = 0

while (i < animais.length) {
     console.log(animais[i])
     i++
 }



while (i < animais.length) {
    console.log(animais[i])
    if ((animais[i]) === "mula") {
    console.log("Encontrei a mula")
    break
    }
    i++
}
// Aqui o while continua enquanto i < a quantidade de animais. Ele para de ser executado quando encontra a mula.



var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var n = 0
while (n < numeros.length) {
    var num = numeros[n]
    n++
    if (num % 2 === 0) {
        console.log(num + " é par")
        continue // nao deixa descer, continua jogando pra cima
    } 
    console.log(num + " é impar")
}
