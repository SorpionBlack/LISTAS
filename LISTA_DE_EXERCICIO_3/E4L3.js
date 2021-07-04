//criar a variavel soma com o valor 0
//usar o for para somar e mostrar a soma dos valores
//criar uma condição para alterar o texto no fim do for
//mostrar a soma

var soma = 0
console.log("soma = ")
for (var i=1; i<99; i=i+2){
    if (i==1){
        soma += i/i
    }
    else{
        soma += (i+2 / (i/2).toFixed(0) )
    }
    console.log(`${i}/${(i/2).toFixed(0)} +`)
}
if(i==99){
    console.log(`${i}/${(i/2).toFixed(0)} = ${soma}`)
}