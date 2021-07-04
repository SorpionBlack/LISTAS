//criar as variaveis menor e maior com o valor inicial de 0
//ler 15 valores através do laço de repetição
//verificar qual a maior e a menor altura informada
//mostrar resultado

let readline = require("readline-sync")
var maior = menor = 0

for(var i=1; i<=15; i++){
    var num = parseFloat(readline.question(`${i}-Digite uma altura: `))

    if ( i==1 ){
        maior = num
        menor = num
    } 
    else {
        if (num > maior){
            maior = num
        }
        if (num < menor) {
            menor = num
        }
    }
}
console.log(`\nA menor altura é: ${menor}`)
console.log(`A maior altura é: ${maior}`)