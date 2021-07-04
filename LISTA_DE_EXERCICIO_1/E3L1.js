//ler o valor do pão -> var pao
//ler o valor da broa -> var broa
//ler a quantidade de pães vendidos -> var ttpao
//ler a quantidade de broas vendidas -> var ttbroa
//calcular o valor total vendido dos pães -> var vendpao
//calcular o valor total vendido das broas -> var vendbroa
//somar o valor das duas entradas -> var total
//separar os 10% do valor de entrada para guardar na poupança ->var poup
//mostrar resultado

var pao = 0.12
var broa = 1.50
var ttpao= 100
var ttbroa= 40

var vendpao = pao*ttpao
var vendbroa = broa*ttbroa
var total = vendpao+vendbroa
var poup = total*0.10

console.log('O valor arrecadado no final do dia é de: R$ '+total+'.00')
console.log('O valor para ser guardado na poupança é de: R$ '+poup.toFixed(2))