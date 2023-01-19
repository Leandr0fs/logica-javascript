const pessoa = {
  nome: "Leandro",
  idade: 19,
  casado: false,
  notas: [10, 20, 30],
  endereco: {
    rua: "Av concórdia",
    numero: 2281,
  }
} 
  console.log(pessoa["nome"])
  console.log(pessoa["idade"])
  console.log(pessoa["casado"])
  console.log(pessoa["notas"][1])
  console.log(pessoa["endereco"])

  //ou 

  console.log(pessoa.nome)
  console.log(pessoa.idade)
  console.log(pessoa.casado)
  console.log(pessoa.notas[2])
  console.log(pessoa.endereco)

  const array = [pessoa, pessoa]
  console.log(array)