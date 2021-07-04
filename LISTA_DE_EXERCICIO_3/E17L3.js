//criar a variavel i que dentro do laço de repetição alterará seus valores entre 1 e 500
//somar todos os numeros impares e multiplos de 3 deste intervalo
//mostrar resultado

var soma = 0

for (var i=1 ; i<=500 ; i++){
    if(i%2!=0 && i%3==0){
        soma += i
    }
}
console.log(`A soma desejada é de: ${soma}`)