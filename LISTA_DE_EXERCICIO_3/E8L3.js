//ler massa -> var massa2
//criar uma variavel para guardar a massa inicial -> var massa1
//criar uma variaval para contar o tempo passado -> var tempo
//fazer com que a cada 50 segundos, a massa incial seja reduzida a metade -> do/while
//mostrar massa inicial, final e quanto tempo foi gasto (hora, minutos e segundos)  

let readline = require("readline-sync")
var massa2 = parseFloat(readline.question("Digite a massa do material: "))

var massa1 = massa2
var tempo = 0

do{
    massa2 = massa2 / 2
    tempo=tempo+50
}
while (massa2>=0.5) 

var hora = parseInt(tempo / 3600)
var min = parseInt((tempo%3600)/60)
var seg = (tempo%3600) % 60

console.log(`\nMassa final: ${massa2}\nMassa incial: ${massa1}`)
console.log(`\nTEMPO LEVADO:\n${hora} hora(s) \n${min} minuto(s) e \n${seg} segundo(s)`)