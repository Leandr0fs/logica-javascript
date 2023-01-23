/*
1.Joao, um pescador, gostaria de controlar o rendimento diario de seu trabalho.
 
Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de 
pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo 
excedente.João precisa que voce faça um script que leia o peso de peixes de João e verifica 
se ha ou nao excesso.Se houver, gravar na variavel "excesso" e na variavel "multa" o valor
da multa que João devera pagar. 
*/ 

const limite = 50 // limite em kg definido 
const valorDaMulta = 4 // valor da multa em R$ definido
const pesoDePeixes = 70 // peso de peixes do João
  
let excesso = 0 // excesso de peso
let multa = 0 // valor da multa  

if (pesoDePeixes > limite) {
  excesso = pesoDePeixes - limite
} else {
  excesso = 0
}

multa = excesso * valorDaMulta
console.log("Excesso: ", excesso)
console.log("Multa: R$", multa )