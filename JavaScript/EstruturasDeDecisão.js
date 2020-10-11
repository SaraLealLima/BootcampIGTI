var a = 50
var b = 50
if (a > b) {
    console.log("a maior que b")
} else if (a < b) {
    console.log("b maior que a")
} else {
    console.log("a e b são iguais")
}


if (a > b) {
    console.log("executar somente se a > b")
}
console.log("sempre executar")

var c = 30
var d = 20
if (c >= d) {
    console.log("c maior ou igual a d")
}
if (d <= c) {
    console.log("d menor ou igual a c")
}

var e = 20
var f = "20"
if (e === f) {
    console.log("e é igual a f")
} 

// usa-se === quando a variavel é EXATAMENTE a mesma, numero com numero, string com string, e assim vai
// usa-se == apenas quando os valores forem o mesmo, ex: numero 10 e string "10"

var g = 10
var h = "10"
if (g !== h) { // != diferente
    console.log("g diferente de h")
}


var i = 4
var j = 3
var k = 5
var l = 7

if ((i > j) && (l > k)) {
    console.log("i maior que j")
}

if ((i === j) || (k === l)) {
    console.log("um dos dois são validos")
}

if (!(1 > 2)) {      // ! no começo significa falso, então ! 1>2 é falso
    console.log("execute")
}

var fruta = "abacaxi"
var valor = 0
if (fruta === "banana") {
    valor = 2
} else if (fruta === "maçã") {
    valor = 3
} else if (fruta === "abacaxi") {
    valor = 4
} else if (fruta === "melão") {
    valor = 5
} else if (fruta === "mamão") {
    valor = 6
} else {
    valor = 10
}
console.log("valor: " + valor)

//Usando switch para simplificar o monte de else if acima
switch(fruta) {
    case "banana":
        valor = 2
        break
    case "maçã":
        valor = 3
        break
    case "abacaxi":
        valor = 4
        break
    case "melão":
        valor = 5
        break
    case "mamão":
        valor = 6
        break
    default:      //valor que segue se nenhum dos case for verdadeiro
        valor = 10
}
console.log("valor: " + valor)

//Operador ternário
var x = 3
var y = 2
var resultado = ""
if (x > y) {
    resultado = "x maior que y"
} else {
    resultado = "senão"
}
console.log(resultado)

resultado = x > y ? "x maior que y" : "senão"
console.log(resultado)
// x > y ? (teste logico) se sim: "x maior que y" senão (representado por :) : "senão"
    




















