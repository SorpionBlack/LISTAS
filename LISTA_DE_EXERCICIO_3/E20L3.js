//criar as variaveis com valores inciais para ser usado no codigo -> let num=1 e n1, n2, n3, n4, i=0
//ler os valores inseridos -> var num
//dentro das condições, verificar a qual intervalo o numero inserido corresponde
//caso seja um numero fora do intervalo, o programa encerra
//mostrar a quantidade de numeros correspondetes aos intervalos

let readline = require ("readline-sync")
let num = 1
let n1 = n2 = n3 = n4 = i =0

console.log("**CASO DESEJE ENCERRAR O PROGRAMA, DIGITE UM VALOR FORA DO INTERVALO ENTRE 0 E 100**")
do{
    num = parseInt(readline.question("Insira o numero: "))
    if ( num>=0 && num<=25){
        n1++
    }
    if (num>= 26 && num <= 50){
        n2++
    }
    if (num>=51 && num<=75){
        n3++
    }
    if (num>=76 && num<=100){
        n4++
    }
    i++
}
while(num>=0 && num<=100)

console.log(`\nEntre 0 e 25 temos: ${n1} numeros.`)
console.log(`Entre 26 e 50 temos: ${n2} numeros.`)
console.log(`Entre 51 e 75 temos: ${n3} numeros.`)
console.log(`Entre 76 e 100 temos: ${n4} numeros.`)