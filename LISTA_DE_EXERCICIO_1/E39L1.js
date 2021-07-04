//ler o salario do joao -> var sal
//ler conta 1 -> var c1
//ler conta 2 -> var c2
//acrescentar multa de 2% em cada multa
//calcular o que vai sobrar do salario do joao -> var final
//mostrar resultado

var sal = 1200
var c1 = 200
var c2 = 120

var nov_c1 = c1 + (c1*0.02)
var nov_c2 = c2 + (c2*0.02)
var final = sal - (nov_c1+nov_c2)
console.log('Resatará do salario do joão: R$'+final.toFixed(2))