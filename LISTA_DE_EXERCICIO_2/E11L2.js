//ler nota 1 -> var n1
//ler peso 1 -> var p1
//ler nota 2 -> var n2
//ler peso 2 -> var p2
//ler nota 3 -> var n3
//ler peso 3 -> var p3
//ler nota 4 -> var n4
//ler peso 4 -> var p4
//calcular a media -> var media
//conferir se entregou os livros
//consferir as advertencias
//mostrar se foi aprovado ou nao

var readline = require("readline-sync")
var p1 = parseInt(readline.question("Insira o peso da nota 1: "))
var n1 = parseInt(readline.question("Insira a nota 1: "))
var p2 = parseInt(readline.question("Insira o peso da nota 2: "))
var n2 = parseInt(readline.question("Insira a nota 2: "))
var p3 = parseInt(readline.question("Insira o peso da nota 3: "))
var n3 = parseInt(readline.question("Insira a nota 3: "))
var p4 = parseInt(readline.question("Insira o peso da nota 4: "))
var n4 = parseInt(readline.question("Insira a nota 4: "))

var nota = n1+n2+n3+n4
console.log("Nota: "+nota)

var peso = p1+p2+p3+p4
if(peso==10){
    if(nota>=6){
        var livro = readline.question("\nOs livros foram devolvidos? ")
        if(livro=="sim"){
            var advert = readline.question("Voce tem alguma advertencia? ")
            if (advert=="sim"){
                var quant = parseInt(readline.question("Quantas? "))
                if(quant<3){
                    console.log("APROVADO!!")
                }
                else{
                    console.log("Reprovado pela quantidade de advertencias.")
                }
            }
            else{
                console.log("APROVADO!!")
            }
        }
        else{
            console.log("E NECESSARIO DEVOLVER OS LIVROS!")
            }
    }
    else{
        console.log("REPROVADO!")
    }
}
else{
    console.log("Valores dos pesos incorretos.")
}