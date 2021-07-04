//ler o numero inserido -> var num
//usar o laço de repetição para criar um contador que mostrará em ordem crescente os números pares e impares -> for (var i=0; i<=num; i++)
//usar a condição para mostrar quais os numeros pares e quais os impares
//mostrar o resultado

let readline = require("readline-sync")
var num = parseInt(readline.question("Insira o numero: "))

for (var i=0; i<=num; i++){
    if (i%2 == 0){
        console.log(`${i} é um numero PAR`)
    }
    if (i%2 != 0){
        console.log(`${i} é um numero IMPAR`)
    }
}