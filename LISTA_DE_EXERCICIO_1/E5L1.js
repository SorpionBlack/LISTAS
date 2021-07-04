//ler o preço da gasolina -> var gasosa
//ler o valor do pagamento -> var pag
//calcular a quantidade de litros abastecido, dividindo o valor pago pela quantidade de litros -> var total
//mostrar resultado

var gasosa = 5.60
var pag = 70
var total = pag/gasosa

console.log("O valor do litro da gasolina é: R$"+gasosa.toFixed(2))
console.log("O valor a ser pago é de: R$"+pag.toFixed(2))
console.log('Foi abastecido '+total.toFixed(2)+' litros de gasolina.')