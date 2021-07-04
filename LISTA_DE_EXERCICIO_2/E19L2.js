//ler valor total -> var valor
//ler numero de prestações (no minimo 12)-> var prest
//calcular o valor de cada prestação ->var prest12
//Se o número de prestações for maior ou igual a 24, adicionar 10% de juros ao valor total
//Se for maior ou igual a 36, adicionar 15% de juros ao valor total
//mostrar resultado

var readline = require("readline-sync")
var valor = parseInt(readline.question("Insira o valor total: "))
var prest = parseInt(readline.question("Insira a quantidade de prestacoes: "))

if(prest>=12 && prest<24){
    var prest12 = valor/prest
    console.log("Cada prestacao será: R$"+prest12.toFixed(2))
}
else if(prest>=24 && prest<36){
    var prest24 = ((valor*0.1)+valor)/prest
    console.log("Cada prestacao será: R$"+prest24.toFixed(2))
}
else if(prest>=36){
    var prest36 = ((valor*0.15)+valor)/prest
    console.log("Cada prestacao será: R$"+prest36.toFixed(2))
}