//ler valor da base -> var base
//ler valor da altura -> var altura
//calcular area do triangulo -> var area
//multiplicar base pela altura e dividir por 2
//mostrar resultado

var readline = require ('readline-sync')
var base = parseInt(readline.question("Insira o valor da base: "))
var altura = parseInt(readline.question("Insira o valor da altura: "))
var area = (base*altura)/2
console.log("A area do triangulo é igual a: "+area)