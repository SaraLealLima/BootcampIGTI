// JAVASCRIPT OBJECT NOTATION
//Objetos Json são um conjunto de dados colocados entre chaves
//Podem conter vários valores, assim como nome, idade, etc

var pessoa = {
    nome: "João",
    idade: 40,
    telefone: "(11) 9999-9999",
    temCarro: true,
    animaisDeEstimacao: [  //possível colocar arrays dentro de Json
        "Totó",
        "Bob"
    ],
    pai: {                //possível colocar outro Json dentro de um
        nome: "José",
        idade: 68
    }
}

console.log(pessoa)                    // além de conseguir pegar apenas uma informação
console.log(pessoa.nome)               // você pode pegar várias dentro do Json usando o .
console.log(pessoa.pai)                // pegar o json dentro do json
console.log(pessoa.pai.nome)           // só um valor específico tambem
console.log(pessoa.animaisDeEstimacao) //pegar a array

pessoa.animaisDeEstimacao.push("Billy")  //inclusive manipular arrays dentro do Json (incluindo o Billy)
console.log(pessoa.animaisDeEstimacao)

pessoa.nome = pessoa.nome + " Silva"  // também acrescentar coisas
// alternativa simplificada: pessoa.nome += " Silva"
pessoa.mae = {           
    nome: "Maria",   // incluir outras propriedades tambem é possível
    idade: 68
  }   


// Colocando Json dentro de funções
function salvarDadosPessoa(pessoa) {
    console.log(pessoa)
}

salvarDadosPessoa(pessoa)

// Convertendo Json para string
JSON.stringify(pessoa)
console.log(JSON.stringify(pessoa))

//Convertendo string para Json
// JSON.parse(pessoa)
