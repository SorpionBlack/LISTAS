//ler o lado X -> var la
//ler o lado Y -> var lb
//ler o lado Z -> var lc
//Identificar se o triangulo é isosceles, equilatero, escaleno ou não é um traingulo
//mostrar resultado

var readline = require ('readline-sync')
var la = parseInt(readline.question("Insira o valor do lado X: "))
var lb = parseInt(readline.question("Insira o valor do lado Y: "))
var lc = parseInt(readline.question("Insira o valor do lado Z: "))

if ((la<(lb+lc)) && (lb<(la+lc)) && (lc<(la+lb))){
    if ((la == lb && la != lc ) || (la == lc && la != lb) || (lb == lc && lb != la)){
            console.log("Os valores informados corresponde a um: \n *TRIANGULO ISOSCELES")
    }

    else if (la == lb && la == lc && lb == lc){
        console.log("Os valores informados corresponde a um: \n *TRIANGULO EQUILATERO")
    }
    else if (la != lb && la != lc && lb != lc){
        console.log("Os valores informados corresponde a um: \n *TRIANGULO ESCALENO")
    }
    else {
        console.log("Os valores informados NAO corresponde a um triangulo!")
    }
}
else{
    console.log("Os dados de entrada não correspondem a um triangulo.")
}