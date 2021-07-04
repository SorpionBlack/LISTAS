//ler um numero inteiro (até 3 digitos)
//mostrar o numero
//mostrar separadamente: centena, dezena e unidade.

var num = 956
var uni = num/1 %10
var dez = num/10 %10
var cen = num/100 %10

console.log('O nuúmero observado é: '+num)
console.log('unidade: '+uni)
console.log('Dezena: '+Math.floor(dez))
console.log('Centena: '+Math.floor(cen))