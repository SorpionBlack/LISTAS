//ler nota 1 -> var n1
//ler nota 2 -> var n2
//ler nota 3 -> var n3
//ler nota 4 -> var n4
//calcular a media -> var media
//conferir se entregou os livros
//consferir as advertencias
//mostrar se foi aprovado ou nao

var readline = require("readline-sync")
var n1 = parseInt(readline.question("Insira a nota 1: "))
var n2 = parseInt(readline.question("Insira a nota 2: "))
var n3 = parseInt(readline.question("Insira a nota 3: "))
var n4 = parseInt(readline.question("Insira a nota 4: "))
var media = (n1+n2+n3+n4)/4
console.log("Media: "+media)

if(media>=6){
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