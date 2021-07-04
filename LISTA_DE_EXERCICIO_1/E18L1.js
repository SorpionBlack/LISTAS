//ler hora normal trabalhada -> var nor
//ler hora extra trabalhada -> var ext
//calcular o salario bruto -> var bru
//calcular o salario liq -> var liq
//mostrar resultado

var nor = 176
var ext = 25
var bru = (nor*10)+(ext*15)
var liq = bru - (bru*0.1)
console.log('O valor do salario bruto é de: R$'+bru.toFixed(2))
console.log('O valor do salario liquido é de: R$'+liq.toFixed(2))