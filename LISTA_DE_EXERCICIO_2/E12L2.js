//ler a resposta sim para iniciar
/*Identificar atraves de perguntas lógicas (verdadeiro ou falso) 
sobre características físicas, um animal que o usuário tenha em
mente. Considere os animais: pato, águia, galinha, avestruz, pinguim, morcego, ornitorrinco,
leão, gato, onça pintada, baleia, tubarão, lambari, enguia e arraia.
*/
//mostrar qual o animal

var readline = require ('readline-sync')
console.log("\n***JOGO DE PERGUNTAS***")
console.log("\nResponda com >sim< ou >nao<")

var geral = readline.question('\nE um animal terrestre? ')
if (geral=="sim"){
    var ornitorrico = readline.question("Possui uma cauda? ")
    if (ornitorrico=="sim"){
        console.log("E O ORNITORRICO!")
    }
    else{
        var leao = readline.question("Possui uma juba em volta do pescoco? ")
        if(leao=="sim"){
        console.log("E O LEAO!")
        }
        else{
            var onca = readline.question("Possui pintas pretas espalhadas no corpo? ")
            if(onca=="sim"){
                console.log("E A ONCA!")
            }
            else{
                console.log("E O GATO!")
            }
        }
    }
}
else{
    var aquatico = readline.question("\nE um animal aquatico? ")
    if(aquatico=="sim"){
        var baleia = readline.question("E um animal muito grande? ")
        if (baleia=="sim"){
            console.log("E A BALEIA!")
        }
        else{
            var tubarao = readline.question("E um predador carnivoro? ")
            if(tubarao=="sim"){
            console.log("E O TUBARAO!")
            }
            else{
                var lambari = readline.question("E um animal pequeno? ")
                if(lambari=="sim"){
                    console.log("E O LAMBARI!")
                }
                else{
                    var enguia = readline.question("Pode dar choque? ")
                    if(enguia=="sim")
                    console.log("E A ENGUIA!")
                    else{
                        console.log("E A ARRAIA")
                    }
                }
            }
        }
    }
    else{
        console.log("\nEntao e uma ave hehe")
        var pinguim = readline.question("Tambem vive na agua? ")
        if(pinguim=="sim"){
            console.log("E O PINGUIM!")
        }
            else{
            var morcego = readline.question("Seu voo e predominante a noite? ")
            if(morcego=="sim"){
                console.log("E O MORCEGO!")
                }
                else{
                var aguia = readline.question("E um predador? ")
                if(aguia=="sim"){
                    console.log("E A AGUIA!")
                    }
                else{
                    var pato = readline.question("E uma ave aquatica? ")
                    if(pato=="sim"){
                        console.log("E O PATO!")
                    }
                    else{
                        var galinha = readline.question("Tem crista? ")
                        if(galinha=="sim"){
                        console.log("E A GALINHA!")
                        }
                        else{
                            console.log("E A AVESTRUZ")
                        }
                    }
                }
            }
        }
    }
}