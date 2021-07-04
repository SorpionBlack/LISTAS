//Ler o salario fixo -> var sal
//Ler valor das vendas -> var vend
//calcular a comissão -> var com
//calcular salario final -> var final
//mostrar comissão e salario final.

var sal = 1800
var vend = 10000
var com = vend*0.04
var final = sal + com
console.log('O valor da comissão é: R$'+com.toFixed(2))
console.log('O valor final do salario é: R$'+final.toFixed(2))