//criar 3 variaveis (numero, par e impar) com os valores inicias de 0
//usar o do para ler os valores inseridos enquanto forem menores que 1001
//quando for inserido o valor: 1001, o programa encerra
//mostrar a soma dos numeros pares e impares que foram inseridos

let readline = require('readline-sync')
let par = impar = num = 0

do{
    num = parseInt(readline.question("Digite um numero: "))
    if (num<=1000 && num%2==0){
        par += num
    }
    if (num<=1000 && num%2!=0){
        impar += num
    }
}
while(num <= 1000)

console.log(`A soma dos números pares é: ${par}`)
console.log(`A soma dos números impares é: ${impar}`)