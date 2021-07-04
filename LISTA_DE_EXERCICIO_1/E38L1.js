//ler ano de nascimento -> var nasc
//ler ano atual -> var atual
//calcular a idade em anos -> var anos 
//calcular a idade em meses -> var meses 
//calcular a idade em dias -> var dias
//calcular a idade em semanas -> var semanas 
//mostrar resultado

var nasc=2002
var atual=2021
var anos = atual - nasc
var meses = anos*12
var dias = anos*365
var semanas = dias/7
console.log("O seu ano de nascimento é: "+nasc)
console.log("A sua idade em anos é: "+anos)
console.log("A sua idade em meses é: "+meses)
console.log("A sua idade em dias é: "+dias)
console.log("A sua idade em semanas é: "+semanas.toFixed(1))