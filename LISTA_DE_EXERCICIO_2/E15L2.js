//Ler numero da matricula (5 digitos)-> var mat
//ler nome completo -> var nome
//Ler genero (M ou F) -> var genero
//Ler curso (BSI, EE, EM, EC ou AQ) -> var curso
//Ler coeficiente de rendimento (de 0 a 10) -> var rendimento
//Como resultado o sistema deve imprimir a matrícula, o nome do aluno, gênero (deve imprimir
//“Masculino” ou “Feminino”), curso (“Bacharelado em Sistemas de Informação” para “BSI”,
//“Engenharia Elétrica” para “EE”, “Engenharia Mecânica” para “EM”, “Engenharia Civil” para
//“EC” e “Arquitetura” para “AQ”), o coeficiente de rendimento, seguido por “Excelente” se o
//coeficiente for [9, 10], “Bom” se entre [7, 9), “Regular” se entre [5, 7), “Necessita melhoras”
//se entre [3, 5) e “Preocupante” se entre [0, 3)

var readline = require ('readline-sync')
var mat = parseInt(readline.question("Insira o numero da matricula: "))
var nome = readline.question("Insira seu nome completo: ")
var genero = readline.question("DIgite genero 'M' ou 'F': ")
var curso = readline.question("Digite as siglas do seu curso: ")
var rendimento = parseInt(readline.question("De 0 a 10, insira seu coeficiente de rendimento: "))

console.log("**********************************\n**********************************")
console.log("Matricula: "+mat)
console.log("Nome: "+nome)

if (genero=="M"){
    console.log("Genero: Masculino")
}
else if(genero=="F"){
    console.log("Genero: Feminino")
}

if (curso=="BSI"){
    console.log("Curso: Bacharelado em Sistemas de Informação")
}
else if (curso=="EE"){
    console.log("Curso: Engenharia Elétrica")
}
else if (curso=="EM"){
    console.log("Curso: Engenharia Mecânica")
}
else if (curso=="EC"){
    console.log("Curso: Engenharia Civil")
}
else if (curso=="AQ"){
    console.log("Curso: Arquitetura")
}

if (rendimento >=9){
    console.log("Rendimento: EXCELENTE!")
}
else if (rendimento>=7 && rendimento<9){
    console.log("Rendimento: BOM")
}
else if (rendimento>=5 && rendimento<7){
    console.log("Rendimento: REGULAR")
}
else if (rendimento>=3 && rendimento<5){
    console.log("Rendimento: NECESSITA MELHORAS")
}
else if (rendimento<3){
    console.log("Rendimento: PREOCUPANTE")
}