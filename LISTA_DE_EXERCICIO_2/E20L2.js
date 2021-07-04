//ler um valor -> var valor
//calcular menor numero de notas de 100,50,10, 5 e 1
//mostrar resultado

var readline=require("readline-sync")
var valor = parseInt(readline.question("Insira um valor: "))

if (valor=>100){
    var n100 = valor/100
    var s100 = valor%100
    console.log(parseInt(n100)+" de R$100.00")
    }
if (s100>=50){
    var n50 = ((valor%100)/50)
    var s50 = ((valor%100)%50)
    console.log(parseInt(n50)+" de R$50.00")
    }
if (s50>=10){
    var n10 = ((valor%100)%50)/10
     var s10 = ((valor%100)%50)%10
    console.log(parseInt(n10)+" de R$10.00")
    }
if (s10>=5 || s50>=5){
    var n5 = (((valor%100)%50)%10)/5
    var s5 = (((valor%100)%50)%10)%5
    console.log(parseInt(n5)+" de R$5.00")
     }
if (s5>=1 || s10>=1 || s50>=1){
    var n1 = ((((valor%100)%50)%10)%5)/1
    console.log(parseInt(n1)+" de R$1.00")
    }