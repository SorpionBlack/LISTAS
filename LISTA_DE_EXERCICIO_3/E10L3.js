//ler a primeira data -> var d1; m2 e a2
//ler a segunda data -> var d2, m2 e a2
//calcular quantos anos se passaram entre as datas e transformar em dias
//calcular quantos meses se passaram e transformar em dias
//considerar os anos bisextos
//mostrar quantos dias se passaram

let readline = require ("readline-sync")

console.log("CONSIDERE O INTERVALO DE ANOS ENTRE 1950-1996\nINSIRA A DATA")
var d1 = parseInt(readline.question("Dia: "))
var m1 = parseInt(readline.question("Mes: "))
var a1 = parseInt(readline.question("Ano: "))
console.log("\nAGORA INSIRA A SEGUNDA DATA")
var d2 = parseInt(readline.question("Dia: "))
var m2 = parseInt(readline.question("Mes: "))
var a2 = parseInt(readline.question("Ano: "))

var tot = (a2 - a1) * 365
var met = (m2 - m1) * 30
var dit = (d2 - d1)
var dx = 0

if (met < 0){
    met = met * (-1)
}
if (dit < 0){
    dit = dit * (-1)
}
var totx = tot + met + dit
while (a1 <= a2){
   if(a1 % 4 == 0 && a1 % 100 != 0){
	dx++   
   }
a1++
}
var total = totx + dx

console.log(`\n**Se passaram ${total} dias entre as datas inseridas**`)