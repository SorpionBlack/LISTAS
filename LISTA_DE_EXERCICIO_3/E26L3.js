//ler numero inserido -> var num
//criar variaveis para usar no codigo -> let res=1, cont=num
//calcular o produto dos numeros que antecedem o informado
//mostrar o processo e o resultado

let readline = require ("readline-sync")
var num = parseInt(readline.question("Insira o valor: "))
let res = 1
let cont=num

console.log(`${num}! = ${num}`)
do{
    res = res*cont
    if(cont!=num){
    console.log(`X ${cont}`)
    }
    cont--
}
while(cont>=1)
console.log(`= ${res}`)