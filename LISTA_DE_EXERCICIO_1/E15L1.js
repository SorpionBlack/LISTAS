//ler o valor da conta -> var conta
//dividir a conta igualmente entre os 3 amigos -> var carlos, andre e felipe
//Fazer que somente o Felipe pague centavos -> var felipe
//mostrar quanto cada um vai pagar

var conta = 101.53
var carlos = conta/3
var andre = conta/3
var felipe = Math.floor(conta/3) + (conta%3)

console.log("O valor da conta é: R$"+conta.toFixed(2))
console.log("O valor que Carlos irá pagar é de: R$"+Math.floor(carlos).toFixed(2))
console.log("O valor que Carlos irá pagar é de: R$"+Math.floor(andre).toFixed(2))
console.log("O valor que Felipe irá pagar é de: R$"+felipe.toFixed(2))