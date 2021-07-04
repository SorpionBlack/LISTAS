//ler peso do queijo
//ler peso do presunto
//ler peso da carne
//ler quantidade de sanduiches a fazer
//mostrar a quantidade de quilos necessarios de cada item

var queijo = 2*0.05
var presunto = 0.05
var carne = 0.1

var sanduiche = 15

var peso_q = sanduiche*queijo
var peso_p = sanduiche*presunto
var peso_c = sanduiche*carne

console.log("Para fazer "+sanduiche+" sanduiches será necessario:")
console.log(peso_q.toFixed(1)+" quilos de queijo;")
console.log(peso_p.toFixed(1)+" quilos de presunto;")
console.log(peso_c.toFixed(1)+" quilos de carne.")