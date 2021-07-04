// ler 15 números inseridos pelo usuário
// criar duas variaveis para o maior (var mai) e menor número (men=menor) com valores iniciais 0
// usar o laço de repetição para ler os 15 números inseridos
// criar uma variavel pra usar como indice (var i)
// criar uma condicional para quando o num for maior que mai, definir mai como num
// criar uma condicional para quando o num for menor que men, definir men como num
// mostrar o maior e o menor número

let readline = require("readline-sync")
var mai = men = 0 

for(var i=1; i<=15; i++){
    var num = parseInt(readline.question(`Digite o numero: `))

    if ( i==1 ){
        mai = men = num
    } 
    else {
        if (num > mai){
            mai = num
        }
        if (num < men) {
            men = num
        }
    }
}
console.log(`O numero menor é o: ${men}. E o numero maior é: ${mai}`)
