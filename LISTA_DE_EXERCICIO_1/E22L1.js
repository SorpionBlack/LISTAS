//ler quantidade de cada moeda -> var c1,c5,c10,c25,c50,r1
//calcular o valor total em reais -> var total
//mostrar resultado

var c1= 20
var c5= 10
var c10= 20
var c25= 25
var c50= 30
var r1= 15

var total=(c1*0.01)+(c5*0.05)+(c10*0.1)+(c25*0.25)+(c50*0.5)+(r1*1)
console.log('O valor economizado foi de: R$'+total.toFixed(2))