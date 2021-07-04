//ler o numero inserido
//Criar a variavel para ser o contador (cont)
//criar o indice para mostrar os dividores do unmero inserido
//mostrar se é um numero perfeito (dizemos que o numero é perfeito se o numero for igual à soma de seus
//divisores positivos diferentes do numero)

let readline = require('readline-sync')
var num = readline.question("Digite um numero: ")

var cont = 0
for( var i=1 ; i<num; i++){
    if (num % i == 0){
        console.log(`${i} é divisor de ${num}.` )
        cont += i
    }
}
if (cont == num){
    console.log(`${num} é um numero perfeito`)
} else {
    console.log(`${num} não é um numero perfeito.`)
}