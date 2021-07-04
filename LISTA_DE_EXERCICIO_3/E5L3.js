// criar a variavel produto com o valor de 1
//informar ao usuario como encerrar o programa
//ler os valores inseridos
//multiplicar os valores inseridos
//mostrar o resultado

let readline = require('readline-sync')
var produto = 1
console.log("\nDigite 0 para encerrar o progama e mostrar o produto da multiplicacao\n")

do{
    var num = parseInt(readline.question("Digite um numero: "))
    if (num==0){
        break
    } else {
        produto *= num
    }
}
while(num!=0)
console.log('O produto dos números digitados é : '+produto)