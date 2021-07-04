//criar a variavel num (numero) e a do contador (cont)
//usar o for criando um indice iniciando com o valor de 1; enquanto for menor ou igual a num; e somando +1)
//usar o se dentro do for se(num % i for igual a 0) e somando +1
//mostrar se o numero é primo ou não

let readline = require ('readline-sync')
var num = parseInt(readline.question("Insira o valor: "))

var cont = 0

for(i=1; i<=num; i++){
    if(num%i == 0){
        cont++
    }
}
if (cont==2){
    console.log("O numero informado é primo!")
}
else{
    console.log("O numero informado NAO é primo!")
}