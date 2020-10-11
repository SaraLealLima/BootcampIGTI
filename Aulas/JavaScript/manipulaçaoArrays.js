var carros = ["Gol", "Palio", "Uno", "Sandero"]
console.log(carros[carros.length - 1]) // exemplo: pegar ultimo elemento do array

/*
array.pop()      remove ultimo elemento
array.push()     insere elemento no fim do array
array.shift()    remove o primeiro elemento e puxa os demais para frente
array.unshift()  adiciona um elemento no inicio do array e empurra os outros para trás
array[indice] = "Nova coisa"  substitui um indice
delete array[indice]  deleta o array do indice informado e o deixa vazio
array.splice(0, 0)  insere novos elementos no array (ou remove) com base nos "parametros", o primeiro é em qual indice o elemento será inserido, e o segundo é se algum elemento vai ser removido a partir do indice
array.concat()   concatena um array no outro
array.slice(0, 0)    cria novos arrays a partir do original sem modifica-lo, primeiro parametro é o indice de inicio, o segundo é a determinação (opcional) do limite, ou seja, de até onde o novo array terminará
*/

var carropop = carros.pop()  // removeu o ultimo elemento do array e o retornou na variável carropop
console.log(carros)
console.log(carropop)

var carropush = carros.push("Ford Ka")  // coloquei na var carropush para receber um retorno do push
console.log(carros)
console.log(carropush)  // o push retorna um numero, o tamanho do novo array, 4 no caso

var carroshift = carros.shift()  // na var carroshift ele retornou o primeiro elemento que foi retirado, igual o pop, só que
console.log(carros)              // usando o primeiro elemento
console.log(carroshift)

var carrounshift = carros.unshift("Onix") // na var carrounshift foi inserido o Onix no começo do array
console.log(carros)
console.log(carrounshift)  // o retorno dele também é o tamanho do array atualizado, 4

carros[2] = "Novo Uno"   //dessa forma você altera o elemento de um índice. No caso Uno estava no indice 2
console.log(carros)      // e agora será substituído por Novo Uno, usando entre as chaves o indice 2

/*
delete carros[2]      // deleta o indice informado e o deixa vazio
console.log(carros)   // remove o elemento e nao coloca nada no lugar dele, fica um buraco
*/

carros.splice(2, 0, "HRV", "Creta") // insere os elementos a partir do indice 2, o 0 significa que nao vai remover nenhum já existente a partir do indice
console.log(carros)

carros.splice(2, 1) // aqui foi excluído a partir do indice 2, removevmos o primeiro depois do 2, o HRV
console.log(carros)

// com o concat você concatena um array em outro e retorna o novo array criado
var carrosAntigos = ["Brasilia", "Monza", "Fusca"]
var carrosAntigos2 = ["Corcel", "Chevete"]
var todosCarros = carros.concat(carrosAntigos, carrosAntigos2) // retornou os arrays juntos
console.log(todosCarros)



var novoArray = todosCarros.slice(1) // slice cria um novo array sem alterar o array original
console.log(novoArray) 

var novoArray2 = todosCarros.slice(2, 5) // primeiro parametro a posição inicial, segundo opcional, mas é o limite que voce pode determinar
console.log(todosCarros)
console.log(novoArray2)

