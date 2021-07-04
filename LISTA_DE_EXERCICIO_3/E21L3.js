//criar as variaveis com valores inciais para o codigo -> let num=1, let par = imp = total = ttpar = mpar = i = 0
//ler o numero inserido enquanto ele for diferente de 0
//contar quantos numeros inseridos são pares
//contar quantos numeros inseridos são impares
//calcular a media dos numeros pares
//calcular a media geral
//mostrar resultados

let readline = require ("readline-sync")
let num = 1
let par = imp = total = ttpar = mpar = i = 0

do{
    num = parseInt(readline.question("Insira o valor: "))
    if (num>0 && num%2==0){
        par++
    }
    if (num>0 && num%2==0){
        ttpar += num
        mpar++
    }
    if (num>0 && num%2!=0){
        imp++
    }
    if (num>0){
        total += num
    }
    i++
}
while(num!=0)

let mediapar = ttpar/mpar
let media = total/(i-1)

console.log(`\nQUANTIDADE DE\nNúmeros pares: ${par}\nNúmeros impares: ${imp}`)
console.log(`\nMEDIA\nNumeros pares: ${mediapar.toFixed(2)}\nGeral: ${media.toFixed(2)}`)