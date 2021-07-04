//ler saldo medio -> var saldo
//calcular o valor do credito
//checar na tabela o credito de acordo com o saldo medio correspondente
//mostrar o saldo medio e o valor do credito

var readline = require ("readline-sync")
var saldo = parseInt(readline.question("Insira o seu saldo medio: "))

console.log("********************************\n********************************")
console.log("Saldo Medio: "+saldo)

if(saldo<=200){
    console.log("Credito: NENHUM CREDITO")
}
else if(saldo>=201 && saldo<=400){
    var cred2= saldo*0.2
    console.log("Credito de: R$"+cred2.toFixed(2))
}
else if(saldo>=401 && saldo<=600){
    var cred3= saldo*0.3
    console.log("Credito de: R$"+cred3.toFixed(2))
}
else if(saldo>600){
    var cred4= saldo*0.4
    console.log("Credito de: R$"+cred4.toFixed(2))
}