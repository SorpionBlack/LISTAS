//ler numero 1 -> var n1
//ler numero 2 -> var n2
//ler numero 3 -> var n3
//Identificar se algum deles é multiplo pelo outro -> if((n1%n2) == 0)
//mostrar resultado

var readline = require("readline-sync")
var n1 = parseInt(readline.question("Insira o numero 1: "))
var n2 = parseInt(readline.question("Insira o numero 2: "))
var n3 = parseInt(readline.question("Insira o numero 3: "))

if((n1%n2) == 0){{
    console.log(n1+" é multiplo de "+n2)
    }
    if((n1%n3) == 0){
        console.log(n1+" é multiplo de "+n3)
    }
    if((n2%n1) == 0){
        console.log(n2+" é multiplo de "+n1)
    }
    if((n2%n3) == 0){
        console.log(n2+" é multiplo de "+n3)
    }
    if((n3%n1) == 0){
        console.log(n3+" é multiplo de "+n1)
    }
    if((n3%n2) == 0){
        console.log(n3+" é multiplo de "+n2)
        }
    }
else{
    console.log("Os numeros não são multiplos")
}