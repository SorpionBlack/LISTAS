//ler o valor incial -> var inicial
//ler a razao -> var razao
//calcular 10 valores da progressao aritmetica
//mostrar resultado

let readline = require("readline-sync")

var inicial = parseInt(readline.question("Insira o valor inicial: "))
var razao = parseInt(readline.question("Insira a razao: "))
let cont=1

console.log("\n**PROGRESSAO ARITMETICA**")
do{
    pa = inicial+razao
    inicial = pa
    console.log(pa)
    cont++
}
while(cont<=10)