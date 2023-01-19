/*
function ola () {                  
  return "alou"                 sem o return
  console.log("parabens")
}
ola()

ou

 const variavel = ola()
  console.log(variavel)
*/

function soma (A, B) {
  return A + B 
}

function subtracao (A, B){
  return A - B
}

function calculadora (tipo) {
  const A = 1
  const B = 2
  if (tipo === "soma") return soma (A, B)
  else if (tipo === "subtracao") return subtracao(A, B)
/*
function calculadora () {
    const A = 1
    const B = 2
    const R = soma (A, B) // ou (10, 10)
    return R
*/
}

const resultado = calculadora("subtracao")
// console.log(resultado)

//const A = 1
//const B = 2
//const R = soma()
//console.log(R)

/*
faça um funçao que verifica se o numero e par ou nao  
*/

function par (num) {
 return num % 2 === 0                  //const condicao = num % 2 === 0
                                       //return condicao
}
 
const ePar = par(5)
 // console.log(ePar)

/*
mostrar os numeros pares de 0 a 100
*/

for (let i = 0; i <=100; i++)  {
 if (par(i))  console.log(i)
}


/*
const a = 10
const b = 2
const tipo = "soma"
let r = 0

if (tipo === "soma") {
  r = a + b
} else if (tipo === "subtraçao"){
  r = a - b
}
 console.log(r)
*/