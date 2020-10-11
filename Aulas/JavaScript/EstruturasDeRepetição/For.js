for (var i = 0; i < 10; i++) {
    console.log(i)
}
// Enquanto i for menor que 10, será incrementado em 1, e assim i será printado 10 vezes, até o 9.

var animais = ["gato", "cachorro", "pato", "mula", "capivara"]
for (var i = 0; i < animais.length; i++) {
   console.log(animais[i])
}
// Enquanto i for menor que a quantidade de elementos na lista, vai printar tds eles. Serve para não ter que saber o número final do negocio.

for (var i = animais.length - 1; i >= 0; i--) {
   console.log(animais[i])
}
// Mesma coisa do outro só que decrescente.