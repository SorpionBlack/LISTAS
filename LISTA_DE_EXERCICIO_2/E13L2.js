//ler o primeiro numero -> var n1
//ler o segundo numero -> var n2
//ler o terceiro numero -> var n3
//coloca-los em ordem crescente
//mostrar resultado

var readline = require ('readline-sync')
var n1 = parseInt(readline.question("Insira o primeiro numero: "))
var n2 = parseInt(readline.question("Insira o segundo numero: "))
var n3 = parseInt(readline.question("Insira o terceiro numero: "))

if ((n1<n2 && n1<n3)&& n2<n3){
    console.log('Ordem crescente: '+n1+','+n2+','+n3)
}
else if ((n1<n2 && n1<n3) && n3<n2){
    console.log('Ordem crescente: '+n1+','+n3+','+n2)
}
else if ((n2<n1 && n2<n3)&& n1<n3){
    console.log('Ordem crescente: '+n2+','+n1+','+n3)
}
if ((n2<n1 && n2<n3)&& n3<n1){
    console.log('Ordem crescente: '+n2+','+n3+','+n1)
}
else if ((n3<n1 && n3<n2)&& n2<n1){
    console.log('Ordem crescente: '+n3+','+n2+','+n1)
}
else if ((n3<n1 && n3<n2)&& n1<n2){
    console.log('Ordem crescente: '+n3+','+n1+','+n2)
}