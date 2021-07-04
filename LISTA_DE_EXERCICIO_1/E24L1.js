//ler 8 partes de agua -> var fix8
//ler 2 partes de suco de maracuja -> var fix2
//calcular quantos litros de agua e de suco sao preciso pra fazer X litros de suco
//mostrar resultado

var fix8 = 0.8
var fix2 = 0.2
//var tonel = fix8+fix2

var refresco = 4
var agua =  refresco*fix8
var suco =  refresco*fix2

console.log('Para fazer '+refresco+" litros de refresco é necessario: ")
console.log(agua.toFixed(1)+" litros de água;")
console.log(suco.toFixed(1)+" litros de suco.")