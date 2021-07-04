//ler unidade de medida -> var medida
//ler temperatura -> var temperatura
//se a unidade de medida for celsius, converter de celsius para fahrenheit -> var fah
//se a unidade de medida for fahrenheit, converter de fahrenheit para celsius-> var cel
//mostrar resultado

var readline = require ('readline-sync')
var medida = readline.question("Insira a unidade de medida: ")
var temperatura = parseInt(readline.question("Insira a temperatura: "))

if (medida=="celsius"){
    var fah= (2*temperatura) + 32
    console.log(temperatura+' graus Celsius equivale a '+fah+' graus Fahrenheit.')    
}
else if(medida=="fahrenheit"){
    var cel = (temperatura-32)/2
    console.log(temperatura+' graus Fahrenheit equivale a '+cel+' graus Celsius.')
}