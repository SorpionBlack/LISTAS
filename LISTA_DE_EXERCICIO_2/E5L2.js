//ler o valor do nivel de alerta de 0 a 10 -> var alerta
//Identificar se ele é grave ou não (grave é superior a 9) -> if(nivel==10)
//caso for superior a 10, mostrar mensagem de erro -> if(nivel>10)
//mostrar resultado

var readline = require ('readline-sync')
var nivel = parseInt(readline.question("De 0 a 10, qual o valor do nivel de alerta: "))

if(nivel >10){
    console.log("*****ERRO*****\nO nivel apresentado está incorreto!!")
}
else if (nivel == 10){
    console.log("Nivel: GRAVE")
}
else {
console.log("Nivel: Normal")
}