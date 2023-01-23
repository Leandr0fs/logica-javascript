/*
destructor:e uma forma da gente ler dados dentro dos objetos e dentro dos arrays de uma forma mais simples
*/

const pessoa = {
  nome:"Leandro",
  sobrenome:"Ferreira",
  idade: 19
}

const { nome, idade } = pessoa
// const nome = pessoa.nome
// const idade = pessoa.idade

// console.log(nome)
// console.log(idade) 

/*
const pessoasAtualizada = {
  ...pessoa,
  idade: 20,
  senha: "951"
}
*/


const array = [10, 20, 30 ]
const[a, b, c ] = array

const newArray = [0,...array, 5]
console.log(newArray)