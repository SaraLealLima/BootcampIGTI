var multiplos = []
for (var i = 0; i < 1000; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
        multiplos.push(i)
    }
}

console.log(multiplos)

var soma = 0

for(var i = 0; i < multiplos.length; i++) {
    soma = soma + multiplos[i]
}
console.log(soma)