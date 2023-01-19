/*
  Crie um algorítmo para calcular o fatorial de un número n!.

  Obs.: O fatorial de um número é calculado pela multiplicação 
  desse número por todos os seus antecessores até chegar ao número 1

  Exemplos:
  2! = 2 * 1
  3! = 3 * 2 * 1 
  4! = 4 * 3 * 2 * 1
  */

  function fatorial (n) {
    if (n <= 2) return n
    return fatorial (n - 1) * n
  }
  /*
  n = 5
  fatorial(5) = 2 * 3 * 4 * 5
  n = 4 
  fatorial(4) = 2 * 3 * 4 
  n = 3 
  fatorial(3) = 2 * 3
  n=2 
  fatorial(2) = 2
  */

  const numero = 100
  const resposta = fatorial(numero)
  console.log(resposta)