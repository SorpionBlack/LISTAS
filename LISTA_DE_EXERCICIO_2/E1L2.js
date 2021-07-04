//ler o primeiro numero -> var n1
//ler o segundo numero -> var n2
//somar os dois numeros -> var soma
//mostrar resultado

var readline = require ('readline-sync')
var n1 = parseInt(readline.question("Insira um numero para somar: "))
var n2 = parseInt(readline.question("Insira o segundo numero: "))
var soma = n1+n2

console.log('A soma de '+n1+' + '+n2+ ' é igual a '+soma)