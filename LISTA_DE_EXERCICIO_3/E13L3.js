//criar 4 variaveis menor=media menor, maior=média maior, med=total das médias e media=médias inseridas
//usar o laço de repetição para receber medias infinitas
//o programa finaliza quando o numero 0 for inserido
//mostrar a maior media inserida
//mostrar a menor media inserida
//mostrar a media aritmetica

let readline = require("readline-sync")
var menor = maior = med = i = 0
var media = 1

do{
    media = parseInt(readline.question("Insira a media obtida: "))

    if (media>0 && i==0){
        maior = menor = media
    }
    if (media>0 && media>maior) {
        maior = media
    }
    if (media>0 && media<menor){
        menor = media
    }
    if (media>0){
        med += media
    }
    i++
}
while(media>0)

var mediarit = med/(i-1)
console.log(`\nMédia maior: ${maior}\nMedia menor: ${menor}\nMédia aritmetica: ${mediarit}`)