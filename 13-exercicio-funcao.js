/*
  Crie um algorítmo para calcular o fatorial de un número n!.

  Obs.: O fatorial de um número é calculado pela multiplicação 
  desse número por todos os seus antecessores até chegar ao número 1

  Exemplos:
  2! = 2 * 1
  3! = 3 * 2 * 1 
  4! = 4 * 3 * 2 * 1
  */

function fatorial (n){
  let i = n
  let fatorial = 1

  while (i >= 2 ){
    fatorial = fatorial * i
    i--
  }

  return fatorial
}

/*
  o i-- ou n-- = vai diminuindo um

  n = 5:
  resposta = 5
  n = 4 
  resposta = 5 * 4 
  n = 3 
  resposta = 5 * 4 * 3
  n = 2 
  resposta = 5 * 4 * 3 * 2
  n = 1
  retorna resposta 
  
*/
const number = 6
const resposta = fatorial(number)
  console.log(resposta)
