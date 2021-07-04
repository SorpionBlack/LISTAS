//ler o valor incial -> var inicial
//ler a razao -> var razao
//calcular 10 valores da progressao geometrica
//mostrar resultado

let readline = require("readline-sync")

var inicial = parseInt(readline.question("Insira o valor inicial: "))
var razao = parseInt(readline.question("Insira a razao: "))
let cont=1

console.log("\n**PROGRESSAO GEOMETRICA**")
do{
    pg = inicial*razao
    inicial = pg
    console.log(pg)
    cont++
}
while(cont<=10)