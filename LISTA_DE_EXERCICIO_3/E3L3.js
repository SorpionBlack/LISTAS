//criar uma constante com o valor unitario
//usar o for para calcular os valores, multiplicando-o de 1 até 200
//mostrar o resultado

const valor = 0.06
console.log("Valor da Xerox: R$0.06")

for(i=1; i<=200; i++){
    var calculo = valor*i
    console.log(`${i} = R$${calculo.toFixed(2)}`)
}