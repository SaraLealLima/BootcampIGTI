var primos = []                      // array onde serão adicionados os valores
var i = 2                            // número inicial porquê 1 não é primo.
for (var i = 2; i <= 80; i++){       // enquanto i (2) for menor que o numero escolhido, será acrescentado 1
    if (primo(i)) {                  // chama a função, colocando como parametro i (numero que vai crescendo) e tem o retorno dos valores true da função
        primos.push(i)               // adiciona os valores true da função no array primos
    }
        
    } 

function primo (n) {                 // pega i (que é o numero que vai crescendo em for (ex: 1 até 200) e o considera como n)
    for (var i = 2; i < n; i++) {    // i na função agora representa o divisor que vai começar em 2 (não com 1 porque todo número pode ser dividido por 1). Enquanto o divisor for menor que o n (nosso numero crescente), acrescenta um a ele. Exemplo: n é 5, 5x2, 5x3, 5x4 (não chega em 5x5 porque i só pode ser menor que n)
        console.log(`dividindo ${n} por ${i}`) // mostra os valores da operação
        if (n % i === 0) {           // se n dividido por i restar 0 (ou seja, se a divisão for inteira e não sobrar nenhum numero), n retornará valor falso. A divisão será feita até que i seja menor que n, se durante o processo algum dos divisores encontrar resto 0, retornará falso, mas se i alcançar n e ainda não achar um divisor (ou seja, restar numero em todas as operações), retornará o valor true.
            console.log(`${n} não é primo pois é divisível por ${i}`) // mostra porquê é false, e por qual numero n é divisível
            return false             // retorna false para n se ele for divisível por algum valor de i
        }
    } 
    console.log(`${n} é primo porque só pode ser dividido por ${n} e por 1`)  // mostra porquê o numero é primo (true), pois foram testados todos os valores de i até alcançar n e nenhum foi uma divisão inteira.
    return true                      // retorna true. É o valor que é retornado para o for do início, que acrescenta todos os resultados true na array primos
}

console.log(primos)                  // printa o array com todos os numeros primos encontrados pela função.