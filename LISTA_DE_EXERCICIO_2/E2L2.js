//ler o primeiro numero -> var n1
//ler o primeiro numero -> var n2
//ler o primeiro numero -> var n3
//Identificar o maior numero entre os 3 informados
//mostrar resultado

var readline = require ('readline-sync')
var n1 = parseInt(readline.question("Insira o primeiro numero: "))
var n2 = parseInt(readline.question("Insira o segundo numero: "))
var n3 = parseInt(readline.question("Insira o terceiro numero: "))

if (n1 > n2 && n1 > n3){
        console.log("Entre os numeros informados o maior é o: "+n1)
}

else if (n2 > n1 && n2 > n3){
    console.log("Entre os numeros informados o maior é o: "+n2)
}
else{
     console.log("Entre os numeros informados o maior é o: "+n3)
}