const array = [2, 10, 3, 5, 15, 12, 8 ]

// forEach: passa por todos os elementos do array
array.forEach((elemento, posiçao) => {
  //console.log(`${elemento} - posiçao ${posiçao}`)
})

// find: retorna  o elemento
const valor = array.find((elemento ) => {
  if (elemento === 10) return true

  return false
})

//findIndex : retorna a posiçao do elemento
const index = array.findIndex(elemento  => elemento >=10 )

//some: retorna true se pelo menos um numero saisfazer a condiçao
const some = array.some(elemento => elemento >=10 )
 
//every:  retorna true se todos os numeros respeitarem a condiçao
const every = array.every(elemento   => elemento >=1)

const newArray = [1, 2, 3, 4, 5, 6, 7, 8]
  //              0  1  2  3  4  5  6  7

// splice : corta o array, o primeiro parametro é o inicio e o segundo e a quantidade
//console.log(nerArray.splice(2,2))

//map: alterar os valores dentro da array seguindo um regra 
/* console.log(newArray.map((elemento) => {
  return elemento * 2
}))
*/

//filter : filtra os elementos dentro da array
console.log(newArray.filter((elemento) => {
  return elemento % 2 === 0
}))

//reduce: reduz o array para algum outro elemento
console.log(newArray.reduce((acumulado, elemento) => {
  return acumulado + elemento
}, 0))