var carros = ["Gol", "Palio", "Uno"]
console.log(carros)

carros[2] = "Argo" //mudando indice 2 para novo carro

console.log(carros)

console.log("Tamanho do array: " + carros.length) //tamanho do array
console.log("Ultimo elemento do array: " + carros[carros.length - 1]) //para saber ultimo elemento do array

carros[3] = "Sandero"
console.log("Ultimo elemento do array: " + carros[carros.length - 1])

carros[carros.length] = "Fit"
console.log("Ultimo elemento do array: " + carros[carros.length - 1])

/* carros[10] = "Polo" 
pulou vários indices do array. Ele aparece como 
[ 'Gol', 'Palio', 'Argo', 'Sandero', 'Fit', <5 empty items>, 'Polo' ]
*/

carros.push("Polo") // com push você insere no ultimo indice, final do array
console.log(carros)

carros.push(123)
console.log(carros) // possível incluir vários tipos num array, string, numbers, etc


