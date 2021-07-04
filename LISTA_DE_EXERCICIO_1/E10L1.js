//ler valor de x -> var x
//ler valor de y -> var y
//ler valor de x2 -> var x2
//ler valor de y2 -> var y2
//calcular a distancia entre os dois pontos -> var calc
//mostrar resultado

var x=-4
var y=4
var x2=3
var y2=4
var calc = Math.sqrt(((x2-x)**2)+((y2-y)**2))
console.log("A distancia entre ("+x+","+y+") e ("+x2+","+y2+") é: "+calc.toFixed(1))
