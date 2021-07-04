//Ler ano de fabricação do carro -> var ano
//Ler preço do carro -> var preço
//se o ano for menor que 1990, calcular valor da taxa a ser pago -> var tx1
//se o ano for maior ou igual a 1990, calcular valor da taxa a ser pago -> var tx2
//mostrar resultado

var readline = require ("readline-sync")
var ano = parseInt(readline.question("Insira o ano de fabricacao do veiculo: "))
var preço = parseInt(readline.question("Insira o preco do veiculo: "))

if (ano<1990){
    var tx1 = preço*0.01
    console.log("A taxa será de: R$"+tx1.toFixed(2))
}
else if (ano>=1990){
    var tx2 = preço*0.015
    console.log("A taxa será de: R$"+tx2.toFixed(2))
}