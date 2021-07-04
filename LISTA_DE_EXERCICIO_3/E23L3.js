//criar variavel para a multiplicação dentro do codigo -> let produto=0
//ler o numero inserido no intervalo de 1 a 10 -> var num
//caso seja diferente deste intervalo o programa encerra
//usar o laço para criar um contador para a tabuada
//calcular a tabuada do numero inserido
//mostrar resultado

let readline = require ("readline-sync")
var num = parseInt(readline.question("Insira o numero: "))
let produto = 0

if(num>=1 && num<=10){
    console.log(`\n**TABUADO DO ${num}**\n`)
    for(cont=0; cont<=10; cont++){
        produto = num*cont
            console.log(`${num} X ${cont} = ${produto}`)
    }
}
else{
    console.log("**INSIRA UM VALOR ENTRE 1 E 10**")
}