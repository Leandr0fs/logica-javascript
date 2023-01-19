let array = [true, false, 0, 1, 2, "string aqui", "SejaDev"]
//             0     1    2  3  4       5             6  

// console.log(array[7])
// array[0] = 1000


// array.pop() remove o ultimo elemento do array
// array.push(1000, "string") adiciona elemento no array

//let newArray = [10, 20, 30]
// console.log(newArray.lenght)
/**
 * while
 * do while 
 * for
 */


 let newArray = [10, 20, 30]
 let i = 0

 while (i< newArray.lenght){
  // console.log(newArray[i])
   i++
}



for (let pos = 0; pos < newArray.lenght; pos++) {
 // console.log(newArray[pos])
}


//for..in
 for (let pos in newArray) {
// console.log(pos)
// console.log(newArray[pos])
 }

// for..of
for (let arr of newArray){
// console.log(arr)
}

/*
 dado um array com x numeros, encontrar a media desses numeros
 media = (soma dos elementos) / tamanho 
*/

const numbers = [10, 20, 30,]
let sum = 0 
for (let num of numbers){ 
 sum = sum + num
} 
const media = sum / numbers.length
console.log(media)
