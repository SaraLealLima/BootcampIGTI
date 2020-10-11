/* 
1) Função que retorna o nome do funcionário que tem o maior salário da empresa. CHECK FUNÇÃO LINDA E FEITA
2) Função que retorna o nome do funcionário que tem o menor salário da empresa. CHECK FUNÇÃO LINDA E FEITA
3) Função que retorna a média salarial da empresa. CHECK FUNÇÃO LINDA E FEITA
4) Função que recebe um setor como parâmetro e retorna o funcionário de maior salário do
setor informado. CHECK FUNÇÃO LINDA E FEITA
5) Função que recebe um setor como parâmetro e retorna o funcionário de menor salário
do setor informado. CHECK FUNÇÃO LINDA E FEITA
6) Função que recebe um setor como parâmetro e retorna a média salarial do setor
informado  CHECK FUNÇÃO LINDA E FEITA
>>>>>> Criar uma função que vai receber uma string com nome de um setor.
Dentro desta função voce pode pegar a array de funcionarios e através do 
metodo filter, filtrar cada funcionario pelo setor.
*/

var funcionarios = [
    {
        "nome": "Joao Cardoso Barbosa",
        "salario": 3000,
        "setor": "Administrativo"
    },
    {
        "nome": "Rebeca Costa Oliveira",
        "salario": 2000,
        "setor": "Produção"
    },
    {
        "nome": "Ana Azevedo Alves",
        "salario": 5000,
        "setor": "Produção"
    },
    {
        "nome": "Marisa Dias Barbosa",
        "salario": 6500,
        "setor": "Produção"
    },
    {
        "nome": "Igor Cunha Lima",
        "salario": 1200,
        "setor": "Comercial"
    },
    {
        "nome": "Sarah Sousa Costa",
        "salario": 1500,
        "setor": "Comercial"
    },
    {
        "nome": "Giovanna Santos Araujo",
        "salario": 2500,
        "setor": "Produção"
    },                           
    {
        "nome": "Otávio Souza Cardoso",
        "salario": 3500,
        "setor": "Administrativo"
    },
    {
        "nome": "Leonardo Souza Lima",
        "salario": 1500,
        "setor": "Produção"
    },
    {
        "nome": "Nicolash Cavalcanti Fernandes",
        "salario": 4000,
        "setor": "Comercial"
    },                             
    {
        "nome": "Matheus Ribeiro Rocha",
        "salario": 4500,
        "setor": "Administrativo"
    },
    {
        "nome": "Vitor Ribeiro Barbosa",
        "salario": 3500,
        "setor": "Produção"
    },
    {
        "nome": "Carlos Oliveira Rodrigues",
        "salario": 7000,
        "setor": "Administrativo"
    },
    {
        "nome": "Mateus Pinto Pereira",
        "salario": 5500,
        "setor": "Administrativo"
    },
    {
        "nome": "Vinícius Pereira Castro",
        "salario": 3500,
        "setor": "Comercial"
    },      
{
        "nome": "Gabriela Souza Pereira",
        "salario": 2500,
        "setor": "Administrativo"
    },
    {
        "nome": "Emily Melo Cavalcanti",
        "salario": 2000,
        "setor": "Produção"
    },
    {
        "nome": "Luís Carvalho Silva",
        "salario": 1500,
        "setor": "Comercial"
    },
    {
        "nome": "José Melo Araujo",
        "salario": 4000,
        "setor": "Produção"
    },
    {
        "nome": "Manuela Ferreira Cardoso",
        "salario": 6000,
        "setor": "Comercial"
    },
    {
        "nome": "Anna Gomes Rodrigues",
        "salario": 7000,
        "setor": "Comercial"
    },
    {
        "nome": "Anna Sousa Goncalves",
        "salario": 5000,
        "setor": "Produção"
    },                           
    {
        "nome": "Gabrielle Araujo Souza",
        "salario": 7500,
        "setor": "Administrativo"
    },
    {
        "nome": "Maria Cavalcanti Rocha",
        "salario": 3000,
        "setor": "Produção"
    },
    {
        "nome": "Luis Lima Rocha",
        "salario": 2000,
        "setor": "Comercial"
    },                             
    {
        "nome": "Rodrigo Correia Souza",
        "salario": 3500,
        "setor": "Administrativo"
    },
    {
        "nome": "Guilherme Silva Cavalcanti",
        "salario": 5500,
        "setor": "Produção"
    },
    {
        "nome": "Nicole Costa Pinto",
        "salario": 2000,
        "setor": "Administrativo"
    },
    {
        "nome": "Emilly Gomes Araujo",
        "salario": 3000,
        "setor": "Administrativo"
    },
    {
        "nome": "Thaís Sousa Carvalho",
        "salario": 4000,
        "setor": "Comercial"
    },
{
        "nome": "Vitor Oliveira Sousa",
        "salario": 5500,
        "setor": "Administrativo"
    },
    {
        "nome": "José Sousa Lima",
        "salario": 7500,
        "setor": "Produção"
    },
    {
        "nome": "Mateus Barros Carvalho",
        "salario": 8000,
        "setor": "Comercial"
    },
    {
        "nome": "Júlio Cavalcanti Martins",
        "salario": 5000,
        "setor": "Produção"
    },
    {
        "nome": "Antônio Almeida Goncalves",
        "salario": 2000,
        "setor": "Comercial"
    },
    {
        "nome": "Ana Castro Dias",
        "salario": 9500,
        "setor": "Comercial"
    },
    {
        "nome": "Rafaela Cunha Santos",
        "salario": 2000,
        "setor": "Produção"
    },                           
    {
        "nome": "Giovanna Barros Santos",
        "salario": 3000,
        "setor": "Administrativo"
    },
    {
        "nome": "Gabrielly Martins Alves",
        "salario": 4000,
        "setor": "Produção"
    },
    {
        "nome": "Otávio Araujo Costa",
        "salario": 3500,
        "setor": "Comercial"
    },                             
    {
        "nome": "Bruna Lima Azevedo",
        "salario": 3000,
        "setor": "Administrativo"
    },
    {
        "nome": "Rebeca Ferreira Oliveira",
        "salario": 2500,
        "setor": "Produção"
    },
    {
        "nome": "Breno Sousa Rocha",
        "salario": 6000,
        "setor": "Administrativo"
    },
    {
        "nome": "Vitória Castro Almeida",
        "salario": 5000,
        "setor": "Administrativo"
    },
    {
        "nome": "Marina Goncalves Rodrigues",
        "salario": 4000,
        "setor": "Comercial"
    }
]


console.log('NOME DO FUNCIONÁRIO COM MAIOR SALÁRIO DA EMPRESA') 
console.log(maiorSalario())

console.log('NOME DO FUNCIONÁRIO COM MENOR SALÁRIO DA EMPRESA')
console.log(menorSalario())

console.log('MEDIAL SALARIAL DA EMPRESA') 
console.log(MediaSalarioEmpresa())

console.log('MAIOR SALÁRIO POR SETOR')
console.log(maiorSalarioDoSetor('Produção'))

console.log('MENOR SALÁRIO POR SETOR')
console.log(menorSalarioDoSetor('Produção'))

console.log('MEDIA SALÁRIAL DO SETOR')
console.log(mediaSalarialDoSetor('Produção'))




//FUNÇÃO DO MAIOR SALARIO DA EMPRESA
function maiorSalario () {
   var listaMaiorSalario = funcionarios.sort(function maiorSalarioTodos (a, b) {
        return a.salario - b.salario
   })
   return listaMaiorSalario[listaMaiorSalario.length - 1].nome
}

//console.log(maiorSalario())
 

// FUNÇÃO DO MENOR SALARIO DA EMPRESA
function menorSalario () {
    var listaMenorSalario = funcionarios.sort(function menorSalarioTodos (a, b) {
        return a.salario - b.salario
    }) 
    return listaMenorSalario[0].nome
}

//console.log(menorSalario())


//FUNÇÃO DA MEDIA SALARIAL DA EMPRESA
function MediaSalarioEmpresa () {
    var mediaSalarialEmpresa = funcionarios.reduce((a, b) => a + b.salario, 0) 
    return mediaSalarialEmpresa / funcionarios.length
}

//console.log(MediaSalarioEmpresa())



// FUNÇÃO MAIOR SALARIO POR SETOR
function maiorSalarioDoSetor(setorSelec) {
    var listaSetor = funcionarios.filter((setorSelecionado) => {
        return setorSelecionado.setor === setorSelec;
      })
      return listaSetor[listaSetor.length - 1]
}

//console.log(maiorSalarioDoSetor('Produção'))



// FUNÇÃO MENOR SALARIO POR SETOR
function menorSalarioDoSetor(setorSelec) {
    var listaSetor = funcionarios.filter((setorSelecionado) => {
        return setorSelecionado.setor === setorSelec;
    })
    return listaSetor[0]
}

//console.log(menorSalarioDoSetor('Produção'))



// FUNÇÃO MÉDIA SALARIAL DO SETOR
function mediaSalarialDoSetor (setorSelec) {
    var listaSetor = funcionarios.filter((setorSelecionado) => {
        return setorSelecionado.setor === setorSelec;
    }) 
    var mediaSetor = listaSetor.reduce((a, b) => a + b.salario, 0)
    return mediaSetor / listaSetor.length
}

// console.log(mediaSalarialDoSetor('Produção'))


