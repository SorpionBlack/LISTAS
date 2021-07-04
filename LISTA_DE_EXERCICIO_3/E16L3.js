//ler numero inserido
//criar um laço com o contador para verificar se os numeros anteriores do informado são primos
//caso seja, mostrar quais são

let readline = require("readline-sync")
var num = parseInt(readline.question("Digite um numero: "))

for (i = 0; i <= num; i++){
    cont = 0
    for (ver = 0; ver <= i; ver++){
        if (i % ver == 0){
            cont++
        }
    }
    if (cont == 02){
        console.log(`${i} é primo`)
    }
}