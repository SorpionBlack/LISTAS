//ler o valor do nivel de alerta de 0 a 10 -> var alerta
//Identificar se ele é grave ou não (grave é superior a 9) -> if(nivel==10)
//caso for superior a 10, mostrar mensagem de erro -> if(nivel>10)
//caso for entre 0 e 3, mostrar mensagem de Nivel: BAIXO -> if(nivel<=3)
//caso for entre 4 e 6, mostrar mensagem de Nivel: MEDIO -> if(nivel>3 && nivel <=6)
//caso for entre 7 e 9, mostrar mensagem de Nivel: ALTO -> if(nivel>6 && nivel<=9)
//mostrar resultado

var readline = require ('readline-sync')
var nivel = parseInt(readline.question("De 0 a 10, qual o valor do nivel de alerta: "))

if(nivel >10){
    console.log("*****ERRO*****\nO nivel apresentado está incorreto!!")
}
else if (nivel == 10){
    console.log("Nivel: GRAVE")
}
else if (nivel <= 3){
    console.log("Nivel: BAIXO")
}
else if (nivel >3 && nivel <=6){
    console.log("Nivel: MEDIO")
}
else if (nivel >6 && nivel <=9){
    console.log("Nivel: ALTO")
}