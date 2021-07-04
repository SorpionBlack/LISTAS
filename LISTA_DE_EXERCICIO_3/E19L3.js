//criar 4 variaveis: num(números inseridos), total(valor total), pos(quantidade de positivos), neg(quantidade de negativos)
//usar o laço for: para receber numeros infinitos - diferentes de 0
//se for digitado 0 o programa finaliza
//mostrar a media total
//mostrar quantos numeros positivos foram inseridos
//mostrar quantos numeros negativos foram inseridos
//mostrar o percentual positivo
//mostrar o percentual negativo

let readline = require("readline-sync")
var num = 1
var pos = neg = total = 0
console.log("***DIGITE 0 PARA ENCERRAR O PROGRAMA***")

for (i=0; num!=0; i++){
    num = parseInt(readline.question("Digite o numero: "))

    if(num < 0){
        neg++
    }
    if(num > 0){
        pos++
    }
    if (num != 0){
        total += num
    }
}

var media = total/(i-1)
var ppos = pos*100/(i-1)
var pneg = neg*100/(i-1)

console.log(`\nMédia: ${media.toFixed(2)}\nNumeros positivos: ${pos}\nNumeros negativos: ${neg}
Percentual de números positivos: ${ppos.toFixed(2)}%\nPercentual de números negativos: ${pneg.toFixed(2)}%`)