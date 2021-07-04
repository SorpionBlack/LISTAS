//ler o salario de um funcionario -> var sal
//aumentar o salario em 15% -> var aum
//diminuir 8% do total, que é o desconto dos impostos -> var imp
//mostrar salario inicial, o salário com o aumento e o salário final.

var sal = 1450
var aum = sal + (sal*0.15)
var imp = aum - (aum*0.08)

console.log('O salario inicial é de: R$'+sal.toFixed(2))
console.log('O salario com aumento é de: R$'+aum.toFixed(2))
console.log('O salario final após o desconto dos impostos é de: R$'+imp.toFixed(2))