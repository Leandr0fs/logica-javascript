function Pessoa(nome, sobrenome){
  let pessoa = {
    nome,
    sobrenome
  }

  pessoa.nomeCompleto = `${nome} ${sobrenome}`
  return pessoa
}

const pessoaA = Pessoa("Leandro", "Ferreira")
const pessoaB = Pessoa("JOSE", "Fortes")

console.log(pessoaA, pessoaB)
console.log(pessoaA.nomeCompleto)