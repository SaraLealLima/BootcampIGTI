var top = [
    { quantidade: 1, item: 'banana', preço: 2.99},
    { quantidade: 2, item: 'abacaxi', preço: 5},
    { quantidade: 3, item: 'laranja', preço: 3.90}, 
    { quantidade: 4, item: 'pêssego', preço: 10.76 }
]

var total = top.reduce((a, b) => a + b.preço*b.quantidade, 0)
console.log(total)


function reducer(acumulador, valorzinhoAtual) {
    console.log('total de compras:' , acumulador, 'preço:', valorzinhoAtual.preço, 'quantidade:', valorzinhoAtual.quantidade, 'item:', valorzinhoAtual.item)
    return acumulador + valorzinhoAtual.preço*valorzinhoAtual.quantidade
}
