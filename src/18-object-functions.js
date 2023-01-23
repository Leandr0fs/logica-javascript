const person = {
  name: "Leandro",
  lastname: "Ferreira",
}

//object.keys(): cria um array com todas as chaves do objeto
//console.log(Object.keys(person))

//object.values(): cria um array com todos os valores do objeto
//console.log(Object.values(person))

//object.entries(): criar um array com um array de objetos e 
const array = Object.entries(person)
/*
 [['name', 'Leandro'],['lastname', 'Ferreira']]
*/
const livros = {
  'Livro A': 25.00,
  'Livro B': 25.00,
  'Livro C': 25.00
}

const values = Object.values(livros)
//values = [25.00, 25.00, 25.00]
const sum = values.reduce((val, acc) =>  val + acc, 0)
console.log(sum)